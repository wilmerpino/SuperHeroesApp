import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuperheroeService } from 'src/app/services/superheroe.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  autenticado: boolean = false;

  constructor(public service: SuperheroeService, private router: Router) {
    this.service.autenticado().subscribe((authenticate) => {
      console.log(authenticate);
      return (this.autenticado = authenticate);
    });
  }

  logout(): void {
    this.service.logout();
    this.router.navigate(['/auth']).then(() => {
      window.location.reload();
    });
  }
}
