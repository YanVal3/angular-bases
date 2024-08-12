import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
  selector:'dbz-list',
  templateUrl:'./list.component.html'
})
export class ListDBZComponent{
    @Input()
    public characterList: Character[] = [
      {
        name: 'Krillin',
        power: 4000
      }
    ];

    //event
    @Output('indexToDelete')
    public onDelete : EventEmitter<string> = new EventEmitter();

    onDeleteCharacter(id? : string): void{
      //Emitir el ID del personaje
      console.log({id});
      if(!id) return;
      this.onDelete.emit(id);
    }
}
