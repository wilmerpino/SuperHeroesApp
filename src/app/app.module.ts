import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

import { ROUTER } from './app.routes';
import { AuthComponent } from './components/auth/auth.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErroresComponent } from './components/errores/errores.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { ResultComponent } from './components/result/result.component';
import { PuntajePipe } from './pipes/puntaje.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    AuthComponent,
    PageNotFoundComponent,
    TarjetaComponent,
    LoadingComponent,
    ErroresComponent,
    NoimagePipe,
    ResultComponent,
    PuntajePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTER, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
