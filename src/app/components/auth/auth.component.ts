import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SuperheroeService } from 'src/app/services/superheroe.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  mensajeError: string = '';
  error: boolean = false;

  constructor(private service: SuperheroeService, private router: Router) {}

  login(token: string, $event: any):  void {
    $event.preventDefault();
    this.service.login(token).subscribe( (res) => {
        if (res == true){
          this.router.navigate(['/home']).then(() => {
            window.location.reload();
          });
        }
        else{
        this.error = true;
        this.mensajeError = 'Token no válido'
      }
    });
  }
}
