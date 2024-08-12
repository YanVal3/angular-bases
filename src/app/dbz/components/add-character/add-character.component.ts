import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  //Crear el objeto de emision
  @Output('nuevoPersonaje')
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

   public character : Character = {
     id: '',
     name: '',
     power: 0
   }

   emitCharacter(): void{

     console.log(this.character);

     if(this.character.name.length === 0) return;

     //Emitir el dato
     this.onNewCharacter.emit(this.character);

     this.character = {id: '', name: '', power: 0};
   }

}
