import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthGaurd } from "../Auth/auth.guide";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeResolverService } from "./recipe-resolver.service";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipesEditComponent } from "./recipes-edit/recipes-edit.component";
import { RecipesComponent } from "./recipes.component";

const routes: Routes=[
    {path: 'recipes', component: RecipesComponent, 
    canActivate: [AuthGaurd],
    children: [
       {path: '', component: RecipeStartComponent},
       {path: 'new', component: RecipesEditComponent},
       {path: ':id', component: RecipeDetailComponent, resolve: [RecipeResolverService]},
       {path: ':id/edit', component: RecipesEditComponent, resolve: [RecipeResolverService]}
    ]},

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipesRoutingModule{

    
}