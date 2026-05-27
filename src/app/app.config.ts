import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// Configuracion generada por Firebase Console al registrar la app.
const firebaseConfig = {
  apiKey: 'AIzaSyC8MKV7UYLR2_nIUcjzhDd-YGnYmPBY5-o',
  authDomain: 'ppw-practica-44015.firebaseapp.com',
  projectId: 'ppw-practica-44015',
  storageBucket: 'ppw-practica-44015.firebasestorage.app',
  messagingSenderId: '539419173961',
  appId: '1:539419173961:web:2effeec9786173fbc68b98',
  measurementId: 'G-BVBW6XCK7J',
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    // Firebase: inicializa la conexion con el proyecto.
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // Auth: registra el servicio de autenticacion en el inyector global.
    provideAuth(() => getAuth()),
    // Firestore: registra la base de datos en el inyector global.
    provideFirestore(() => getFirestore()),
    
  ],
};
