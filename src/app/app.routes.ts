import { Routes } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [

    // ruta, componente
    { path: "bienvenido", component: BienvenidoComponent},
    { path: "login", component: LoginComponent},
    { path: "error", component: ErrorComponent}
];
