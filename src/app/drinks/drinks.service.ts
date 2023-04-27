import { Injectable } from '@angular/core';
import { Mock } from './mock-drink-list';
import { DrinkModel } from './Drink.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  addDrinkModel(drink: DrinkModel) {
    Mock.Drinks.push(drink);
  }

  getDrinkById(id: number): Observable<DrinkModel | undefined> {
    return of(Mock.Drinks.find(_ => _.id === id));
  }

  constructor() { }

  getDrinks(): Observable<DrinkModel[]> {
    return of(Mock.Drinks);
  }
}
