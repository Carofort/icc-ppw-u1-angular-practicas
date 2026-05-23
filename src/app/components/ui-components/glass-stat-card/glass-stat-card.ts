import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-glass-stat-card',
  imports: [],
  templateUrl: './glass-stat-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class GlassStatCard {
  label = input.required<string>();
  value = input.required<string>();
  helper = input<string>('Actualizado recientemente');
}
