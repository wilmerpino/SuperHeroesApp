import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuperheroeService } from 'src/app/services/superheroe.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent {
  heroes: any[] = [];
  error: boolean = false;
  loading: boolean = true;
  mensajeError: string = '';

  constructor(private service: SuperheroeService,  private activateRouter: ActivatedRoute) {
    this.activateRouter.params.subscribe((params) => {
      this.buscar(params['termino']);
    });
  }

  buscar(termino: string): void {
    if (termino.length > 0) {
      this.service.buscarHeroe(termino).subscribe((response: any) => {
        console.log(response);
        if (response.response === 'success') {
          this.heroes = response.results;
          this.error = false;
        } else {
          this.heroes = [];
          this.error = true;
          this.mensajeError = response.error;
        }
        this.loading = false;
      });
    }
  }
}
