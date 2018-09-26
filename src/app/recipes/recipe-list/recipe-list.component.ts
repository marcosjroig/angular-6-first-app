import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../../recipes/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  recipes: Recipe[];

  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (recipeArray: Recipe[]) => {
        this.recipes = recipeArray;
      }
    );

    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
