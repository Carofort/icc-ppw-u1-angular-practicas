import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { FormUtils } from '../../shared/utils/form-utils';

@Component({
  selector: 'app-profile-page',
  imports: [ReactiveFormsModule],
  templateUrl: './profile-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ProfilePage {

  private fb = inject(FormBuilder);
  formUtils= FormUtils;

  myForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    edad: [0, [Validators.required, Validators.min(18)]],
    correo: ['', [Validators.required, Validators.email]],
  });

  get nombre() {
    return this.myForm.get('nombre')!;
  }

  get edad() {
    return this.myForm.get('edad')!;
  }

  get correo() {
    return this.myForm.get('correo')!;
  }

  private router = inject(Router);

  onSubmit() {
    if (this.myForm.invalid) {
      // Marcar todos los campos como touched para mostrar errores
      this.myForm.markAllAsTouched();

      return;
    }

    console.log(this.myForm.value);

    // Por ahora, navegar a home
    this.router.navigate(['/']);
  }
}
