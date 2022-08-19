import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Raul',
    favoritos: [
      { id: 1, nombre: 'CS GO' },
      { id: 2, nombre: 'FIFA' },
    ]
  }

  nuevoJuego: string = '';

  guardar(  ) {
    console.log('formulario post');
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  agregarJuego() {
    this.persona.favoritos.push({
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    });
    this.nuevoJuego = '';
  }


}
