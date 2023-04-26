import { DrinkModel } from '../Drink.model';
import { DrinksService } from './../drinks.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent {
  drinks: DrinkModel[] = [];

  @Output() detailsEvent = new EventEmitter();

  constructor(
    public drinksService: DrinksService
  ){

  }

  onDrinkClick(id: number) {
    this.detailsEvent.emit(id);
  }
}
