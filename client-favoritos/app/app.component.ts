import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/home.html'
})

export class AppComponent {
  title: string;
  description: string;

  constructor() {
    this.title = 'APP FAVORITOS';
    this.description = 'Aplicacion web SPA con Angular 2 favoritos online'
  }
}