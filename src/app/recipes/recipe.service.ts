import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[]=[
        new Recipe('Food Recipe', 'This is simply a test for food',
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",[
            new Ingredient('Tomatoes', 3),
            new Ingredient('Lettuce', 1),
            new Ingredient('Eggs', 4),
        ]
      ),

      new Recipe('Dessert Recipe', 'This is simply a test for dessert recipe',
      "https://c4.wallpaperflare.com/wallpaper/480/734/368/cakes-pastries-desserts-wallpaper-preview.jpg",[
        new Ingredient('Coconut', 1),
        new Ingredient('Milk', 1),
        new Ingredient('Flour', 4),
      ]
      ),

      new Recipe('Cake Recipe', 'This is simply a test for cake recipe',
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNkv9nzF6lXNAgDaVTz9p417w1DlKv7Exjg&usqp=CAU",[
        new Ingredient('Ice and sugar', 3),
        new Ingredient('Butter', 1),
        new Ingredient('Eggs', 4),
      ]
      )]; 

     // private recipes: Recipe[] = [];
       //recipeChanged: any;

      constructor(private slService: ShoppingListService){}
      
      setRecipes(recipes: Recipe[]){
       this.recipes = recipes;
       this.recipeChanged.next(this.recipes.slice());
      }

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
       this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
       this.recipes.push(recipe);
       this.recipeChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
       this.recipes[index] = newRecipe;
      }

      deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
      }
}