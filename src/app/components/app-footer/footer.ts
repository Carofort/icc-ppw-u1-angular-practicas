import { Component, signal } from '@angular/core';
import { DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, PercentPipe],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class AppFooterComponent {
  readonly estudiante = signal('Carolina Fortmann');
  readonly fecha = signal(new Date());
  readonly version = signal(1.0);
  readonly cursoCosto = signal(150);
  readonly progreso = signal(0.75);
}