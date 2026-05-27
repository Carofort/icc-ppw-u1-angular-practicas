import { Injectable, inject } from '@angular/core';
import { Auth, authState, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, // <-- AÑADIR ESTE
  signInWithPopup } from '@angular/fire/auth';
import { from } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);

  // authState emite null cuando no hay sesion, o el objeto User cuando hay sesion.
  // toSignal convierte el Observable en un signal reactivo para usar en templates.
  currentUser = toSignal(authState(this.auth));

  // signInWithEmailAndPassword devuelve una Promise.
  // from() la convierte en Observable para poder encadenar operadores RxJS o usar con rxResource.
  login(email: string, password: string) {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  // Igual que login, se convierte la Promise a Observable.
  register(email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  // NUEVO: Login con Google usando un popup.
  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return from(signInWithPopup(this.auth, provider));
  }

  logout() {
    return from(signOut(this.auth));
  }

  get uid(): string | null {
    return this.currentUser()?.uid ?? null;
  }
}