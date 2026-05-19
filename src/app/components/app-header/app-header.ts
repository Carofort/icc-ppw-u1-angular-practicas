import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, UpperCasePipe, RouterLinkActive],
  templateUrl: './app-header.html',
  styleUrl: "./app-header.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeader {

  readonly brand = signal('PPW Angular');
  readonly showInfo = signal(false);
  readonly toggleLabel = computed(() => this.showInfo() ? 'Ocultar Información' : 'Mostrar Información');

  changeBrand(): void {
    // act el valor de la señal brand
    this.brand.update((valor) => valor + '!');
  }

  resetBrand(): void {
    this.brand.set('PPW Angular');
  }

  toggleInfo() {
    this.showInfo.update((valor) => !valor);
  }

}

