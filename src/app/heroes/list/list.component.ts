import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
   public nameHeroDeleted? : string;

   public HeroNames : string[] = ['Superman', 'WonderWoman', 'Aquaman', 'Thor', 'Batman'];

   removeLastHero() : void {
       this.nameHeroDeleted = this.HeroNames.pop();
   }
}

