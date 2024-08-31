import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,BienvenidoComponent,LoginComponent,ErrorComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Clase-01-Ejercicios';

  edadUno: number | null = null;
  edadDos: number | null = null;
  promedioRetorno:number | string = 0;
  sumaRetorno:number = 0;

  

  promedio(){
    if (this.edadUno !== null && this.edadDos !== null) {
      
      this.promedioRetorno = (this.edadUno + this.edadDos) / 2;
      this.suma()
    }
    else{

      this.promedioRetorno = "Falta ingresar edad";
    }
  }

  suma(){
    
    if (this.edadUno !== null && this.edadDos !== null) {
      
      this.sumaRetorno = this.edadUno + this.edadDos;
    }
    
  }

  limpiar(){
    this.edadUno= null;
    this.edadDos= null;
    this.promedioRetorno = 0;
  }
}
