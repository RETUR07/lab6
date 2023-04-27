import { DrinkModel } from '../Drink.model';
import { DrinksService } from './../drinks.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.scss']
})
export class DrinkListComponent implements OnInit {
  drinks: DrinkModel[] = [];

  @Output() detailsEvent = new EventEmitter();

  constructor(
    public drinksService: DrinksService
  ){

  }
  ngOnInit(): void {
    this.drinksService.getDrinks().subscribe(_ => {
      this.drinks = _;
    });
  }

  onDrinkClick(id: number) {
    this.detailsEvent.emit(id);
  }
}
