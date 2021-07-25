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

  buscar(termino: string): void {
    this.router.navigate(['result', termino]);
  }
}
