import { DrinksService } from './../drinks.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DrinkModel } from '../Drink.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drinks.form',
  templateUrl: './drinks.form.component.html',
  styleUrls: ['./drinks.form.component.scss']
})
export class DrinksFormComponent {
  constructor(public drinksService: DrinksService,
    public router: Router
    ) {

  }

  @ViewChild(NgForm) form: NgForm | undefined;

  data: DrinkModel = {
    id: 0,
    name: '',
    price: 0
  };

  add() {
    const drink = new DrinkModel(
      this.form?.controls["id"].value,
      this.form?.controls["name"].value,
      this.form?.controls["price"].value
    );
    this.drinksService.addDrinkModel(drink);
    console.log(this.drinksService.getDrinks());
  }

  centerNavigate() {
    this.router.navigate([""]);
  }
}
