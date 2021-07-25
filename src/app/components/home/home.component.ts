import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperheroeService } from 'src/app/services/superheroe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  heroe: any = [];
  error = false;
  mensajeError = '';
  loading = true;

  constructor(private service: SuperheroeService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.getBatman();
  }

  getBatman(): void {
    const initId = 69;
    this.service.getHeroe(initId).subscribe((response: any) => {
      console.log(response);
      if (response.response === 'success') {
        this.heroe = response;
        this.error = false;
      } else {
        this.heroe = [];
        this.error = true;
        this.mensajeError = response.error;
      }
      this.loading = false;
    });
  }
}
