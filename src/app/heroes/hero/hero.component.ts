import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name : string = 'superman';
  public age  : number = 31;

  //Los get son atributos tambien de la clase igual que una variable y no necesitan ser llamados con ()
  get capitalizedName() : string {
     return this.name.toUpperCase();
  }

  //Los metodos si deben ser llamados con ()
  getHeroDescription() : string {
     return `${ this.name } - ${ this.age } `;
  }

  changeName() : void {
    this.name = 'Wonder Woman';
  }

  changeAge() : void {
    this.age = 29;
  }

  resetData() : void {
    this.name = 'superman';
    this.age = 31;

    //El ciclo de detencion de angular no esta pendiente del html si no solamente de sus atributos del ts
    document.querySelectorAll('h1').forEach(element=>{
       element.innerHTML = '<h1>Desde Angular</h1>'
    })
  }

}
