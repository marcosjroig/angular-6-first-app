import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../../recipes/recipe.service';
import { ShoppingService } from '../../shopping-list/shopping.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  id: number;
  recipeDetail: Recipe;
  constructor(private shoppingService: ShoppingService, 
              private route: ActivatedRoute, 
              private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.recipeDetail = this.recipeService.getRecipeById(this.id);

    this.route.params.subscribe(
      (params: Params)  => {
        this.recipeDetail = this.recipeService.getRecipeById(+params['id']);
      }
    );
  }

  onAddToShoppingList() {
    this.shoppingService.addIngredients(this.recipeDetail.ingredients);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
