import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, UpperCasePipe, RouterLinkActive],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeader {
  readonly brand = signal('PPW Angular');
  readonly showInfo = signal(false);
  readonly toggleLabel = computed(() =>
    this.showInfo() ? 'Ocultar Información' : 'Mostrar Información',
  );

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

  private authService = inject(AuthService);
  private router = inject(Router);

  // El signal del servicio: null = no autenticado, User = autenticado.
  currentUser = this.authService.currentUser;

  logout() {
    this.authService.logout().subscribe(() => {
      // Redirige al login despues de cerrar sesion.
      this.router.navigate(['/login']);
    });
  }
}
