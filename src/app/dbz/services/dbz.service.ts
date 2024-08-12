import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters : Character[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 3000
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 5000
    },
    {
      id: uuid(),
      name: 'Pam',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 8000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    }
   ];

   addNewCharacterReceived(character : Character): void{
    /*console.log("MAIN");
    console.log(character);*/

    /*const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }*/
   /*Si un objeto tiene muchas propiedades, ...nombre, toma todas las propiedades para esparcirlas */
    const newCharacter: Character = {...character, id:uuid()};

    console.log(newCharacter)

    this.characters.push(newCharacter);

   }

   /*onDeleteCharacter(index:number){
    console.log("el index ", index);
    this.characters.splice(index, 1);
   }*/

   deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
   }

  constructor() { }
}
