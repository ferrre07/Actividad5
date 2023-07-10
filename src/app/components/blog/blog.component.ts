import { Component, Input } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  @Input() misNoticias: Noticia[] = [] //

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

  cargarNoticias(): string {
    let html = ""

    this.noticias.forEach(noticia => {
      html += `<article class="noticia">
      <img src="${noticia.img}" alt="noticia.titulo">
      <h3>${noticia.titulo}</h3>
      <p>${noticia.cuerpo}</p>
      <p>${noticia.fecha}</p>
    </article>`
    })
    return html

  }
  getDataForm(){
    // console.log(this.newNoticia)
    //compruebo vacio
    if(this.newNoticia.titulo!=="" && this.newNoticia.img!=="" && this.newNoticia.cuerpo!=="" && this.newNoticia.fecha!=="" ){
      this.noticias.push(this.newNoticia)
      this.newNoticia={ titulo: "", img: "", cuerpo: "", fecha: "" }
    }
    else{
      alert('Hay algún campo vacío')
    }
    
  }

}
