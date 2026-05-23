import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-feature-chip-list',
  imports: [],
  templateUrl: './feature-chip-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FeatureChipList {
  title = input<string>('Características');
  chips = input<string[]>([]);
}
