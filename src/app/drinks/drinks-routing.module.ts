import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkCenterComponent } from './drink-center/drink-center.component';
import { DrinksFormComponent } from './drinks.form/drinks.form.component';

const routes: Routes = [
  {
    path: '',
    component: DrinkCenterComponent
  },
  {
    path: 'form',
    component: DrinksFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrinksRoutingModule { }
