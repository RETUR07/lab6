import { Injectable } from '@angular/core';
import { Mock } from './mock-drink-list';
import { DrinkModel } from './Drink.model';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  addDrinkModel(drink: DrinkModel) {
    Mock.Drinks.push(drink);
  }
  
  getDrinkById(id: number): DrinkModel | undefined {
    return Mock.Drinks.find(_ => _.id === id);
  }

  constructor() { }

  getDrinks(): DrinkModel[] {
    return Mock.Drinks;
  }
}
