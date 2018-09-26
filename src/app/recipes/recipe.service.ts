import { Recipe } from '../recipes/recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';
// import { EventEmitter } from '@angular/core';

export class RecipeService {

    recipeChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [

        new Recipe('Tasty schnitzel', 'Tasty schnitzel with meat, french fries and lemon.',
                   'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Schnitzel.JPG/800px-Schnitzel.JPG', 
                    [
                       new Ingredient('french fries', 1),
                       new Ingredient('meat', 1),
                       new Ingredient('lemon', 1)
                   ]
                ),
        new Recipe('Big fat burguer', 'A nice big hamburguer plenty of cheese with 300gr meat',
                   'https://c.pxhere.com/photos/d1/7b/abstract_barbeque_bbq_beauty_beef_bread_bun_burger-819324.jpg!d',
                   [
                      new Ingredient('Mozzarella', 1),
                      new Ingredient('Hamburguer', 1),
                      new Ingredient('Emental', 1),
                      new Ingredient('tomato', 1),
                      new Ingredient('basilic', 1)
                   ])
      ];

    setRecipes (recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipes() {
        // Return a new copy of the array.
        return this.recipes.slice();
    }

    getRecipeById(id: number) {
        // Return a new copy of the array.
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }
}
