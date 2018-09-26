import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  ingredients: Ingredient[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
     this.ingredients = this.shoppingService.getIngredients();
     this.subscription = this.shoppingService.ingredientsChanged.subscribe(
       (srvIngredients: Ingredient[]) => {
         this.ingredients = srvIngredients;
       }
     );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index);
  }
}
