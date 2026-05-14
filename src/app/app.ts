import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './components/app-header/app-header';
import { AppHeroComponent } from './components/app-hero/hero';
import { AppFooterComponent } from './components/app-footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, AppHeroComponent, AppFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'ppw-angular-21';
}