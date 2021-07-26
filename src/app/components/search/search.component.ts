import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent {

  constructor(private router: Router) {

  }

  buscar(termino: string, $event: any): void {
    $event.preventDefault();
    if (termino.length > 0){
        this.router.navigate(['result', termino]);
    } 
    else{
      alert('Debe ingresar un criterio de búsqueda');
    }
  }
}
