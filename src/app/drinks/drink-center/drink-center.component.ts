import { DrinksService } from './../drinks.service';
import { Component } from '@angular/core';
import { DrinkModel } from '../Drink.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-drink-center',
  templateUrl: './drink-center.component.html',
  styleUrls: ['./drink-center.component.scss']
})
export class DrinkCenterComponent {
  details?: DrinkModel;

  constructor(
    public drinksService: DrinksService,
    public router: Router,
    public route: ActivatedRoute
    ) {

  }

  onDetailsEvent(detailsID: number) {
    this.details = this.drinksService.getDrinkById(detailsID);
  }

  formNavigate() {
    this.router.navigate(["form"], { relativeTo: this.route });
  }
}
