import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }
  
  
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched heroe id=${id}`);
    return of(HEROES.find(hero => hero.id  === id ));
  }


  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add(`HeroService: fetched heroes`);
    return of(HEROES);
  }
  
}
