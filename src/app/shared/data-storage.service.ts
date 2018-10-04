import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

    constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

    storeRecipes () {
        const token = this.authService.getToken();
        // const headers = new HttpHeaders().set('Authorization', 'Bearer dadfsfsfsffskfsk');

        return this.httpClient.put('https://ng-recipe-book-fb8b9.firebaseio.com/recipes.json?auth=' + token,
                                   this.recipeService.getRecipes(), {
                                   observe: 'body'
                                   // headers: headers
                                   });
    }

    getRecipes () {
        const token = this.authService.getToken();

        this.httpClient.get<Recipe[]>('https://ng-recipe-book-fb8b9.firebaseio.com/recipes.json?auth=' + token, {
            observe: 'body',
            responseType: 'json'
        })
        .pipe(map(
            (recipes) => {
                console.log(recipes);
                 for (const recipe of recipes) {
                     if (!recipe['ingredients']) {
                         console.log(recipe);
                         recipe['ingredients'] = [];
                     }
                 }
                return recipes;
             }
        ))
        .subscribe(
            (recipes: Recipe[]) => {
               this.recipeService.setRecipes(recipes);
            }
        );
    }
}
