import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

heroes = HEROES;

hero: Hero =
{
  id: 2,
  name: 'Lenardo-Dicaprio'
};

  constructor() { }

 
  ngOnInit() {

  }


  selectedHero:Hero;
  onSelect( hero: Hero):void {
    this.selectedHero = hero;
  }

}
