import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { GlassStatCard } from '../glass-stat-card/glass-stat-card';
import { GradientCtaBanner } from '../gradient-cta-banner/gradient-cta-banner';
import { FeatureChipList } from '../feature-chip-list/feature-chip-list';

@Component({
  selector: 'app-ui-components-page',
  imports: [GlassStatCard, FeatureChipList, GradientCtaBanner],
  templateUrl: './ui-components-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
})
export class UiComponentsPage {
  readonly quickChips = [
    'Glass Surface',
    'Gradient CTA',
    'Responsive Grid',
    'Standalone Components',
    'Tailwind + DaisyUI',
  ];
}
