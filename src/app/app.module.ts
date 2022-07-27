import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routting-module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthComponent } from './Auth/auth.component';
import { AuthInterceptorService } from './Auth/auth-interceptor.service';
import { RecipesModule } from './recipes/recipes-module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/Shared.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [ShoppingListService, RecipeService,
    {provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptorService, 
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
