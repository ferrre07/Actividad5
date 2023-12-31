import { Component } from '@angular/core';
import { Noticia } from './interfaces/noticia.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  noticias: Noticia[]=[]
  newNoticia: Noticia = { titulo: "", img: "", cuerpo: "", fecha: "" }

  constructor(){
    this.noticias=[
      {
        titulo: 'Ejemplo',
        img: 'https://images.unsplash.com/reserve/Af0sF2OS5S5gatqrKzVP_Silhoutte.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80',
        cuerpo:'La M-45 permanecerá cerrada por obras La M-45 permanecerá cerrada por obras La M-45 permanecerá cerrada por obras La M-45 permanecerá cerrada por obras La M-45 permanecerá cerrada por obras La M-45 permanecerá cerrada por obras ',
        fecha: 'Ayer'
      },
      {
        titulo: 'Segundo',
        img: 'https://www.lavanguardia.com/andro4all/hero/2023/04/6d8841b6-9d24-457a-95c5-0d3de1d7bf5f.png?width=768&aspect_ratio=16:9&format=nowebp',
        cuerpo:'La M-45 permanecerá cerrada por obras La M-45 permanecerá cerrada por obras La M-45 permanecerá cerrada por obras La M-45 permanecerá cerrada por obras La M-45 permanecerá cerrada por obras La M-45 permanecerá cerrada por obras ',
        fecha: 'Anoche'
      },
    ]
  }

  getNoticia($event:Noticia){
    //hago un push en el array
    // hay que hacer las validaciones, mirar 2da app
    if(this.newNoticia.titulo!=="" && this.newNoticia.img!=="" && this.newNoticia.cuerpo!=="" && this.newNoticia.fecha!==""){

      this.noticias.push($event)
    }else{
      alert('Noticia incompleta')
    }
    
  }
}
