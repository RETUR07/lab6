import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'drinks',
    loadChildren: () => import('./drinks/drinks.module').then(m => m.DrinksModule)
  },
  {
    path: '',
    redirectTo: 'drinks',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'drinks'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
