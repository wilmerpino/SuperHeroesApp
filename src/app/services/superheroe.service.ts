import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SuperheroeService {
  public token = new Subject<boolean>();
  public token$ = this.token.asObservable();

  constructor(private http: HttpClient) {

  }

  getQuery(endpoint: string): Observable<any> {
    const token = this.getToken();
    const url = `api/${token}/${endpoint}`;

    return this.http.get(url);
  }

  login(token: string): Observable<boolean> {
    localStorage.setItem('token', token);
    return new Observable((result) => {
        const id = 69;
        this.getHeroe(id).subscribe((response: any) => {
          if (response.response === 'success') {
            result.next(true);
            result.complete();
          } else {
            this.logout();
            result.next(false);
            result.complete();
          }
        });
      });
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  autenticado(): Observable<boolean> {
    return new Observable((result) => {
      const token = this.getToken();
      result.next(token == null || token == undefined ? false : true);
      result.complete();
    });
  }

  getHeroe(id: Number): Observable<any> {
    return this.getQuery(`${id}`).pipe(map((data: any) => data));
  }

  buscarHeroe(name: string): Observable<any> {
    return this.getQuery(`search/${name}`).pipe(map((data: any) => data));
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
