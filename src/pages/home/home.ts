import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ANIMALES } from '../../data/data.animales';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private animales = [];
  private audio = new Audio();
  private ordenar:boolean = false;

  constructor(public navCtrl: NavController) {

    this.animales = ANIMALES.slice(0);
  }


  public reproducir(item){
    

    if(!item.reproduciendo){
      
      this.audio.src = item.audio;
      this.audio.load();
      this.audio.play();
  
  
  
      item.reproduciendo = true;
  
      setTimeout(() => {
        item.reproduciendo = false;
      }, item.duracion*1000);
  
    }else{
        item.reproduciendo = false;
        this.audio.pause();
                
    }
  }


  public borrarElemento(indice){
      console.log(indice);
    
      this.animales.splice(indice,1)
  }

  doRefresh(refresher) {

    
      
    setTimeout(() => {
      
   
    this.animales = ANIMALES.slice(0);
    refresher.complete();
    }, 500);
    

     
  }


  public aparecerOrdenar(valor){
    this.ordenar = valor;
    console.log(this.ordenar);
    
  }


  public reorderItems(evento){
      let animal = this.animales.splice(evento.from,1)[0];
      console.log(animal);
      this.animales.splice(evento.to,0,animal)
  }

}
