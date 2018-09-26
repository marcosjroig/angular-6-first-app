import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../../shopping-list/shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingService: ShoppingService) {  }

  ngOnInit() {
    this.subscription = this.shoppingService.startedEditing
      .subscribe(
        (index: number) => {
          this.editItemIndex = index;
          this.editMode = true;
          this.editedItem = this.shoppingService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient =  new Ingredient(value.name, value.amount);

    if (this.editMode) {
        this.shoppingService.updateIngredient(this.editItemIndex, newIngredient);
     } else {
      this.shoppingService.addIngredient(newIngredient);
    }

    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingService.deleteIngredient(this.editItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
