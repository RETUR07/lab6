import { DrinkModel } from "./Drink.model";

export class Mock {
  static Drinks: DrinkModel[] =
  [
    new DrinkModel(1, 'Latte1', 1234 ),
    new DrinkModel(2, 'Latte2', 123 ),
    new DrinkModel(3, 'Latte3', 12 ),
    new DrinkModel(4, 'Latte4', 1 )
  ];
}

