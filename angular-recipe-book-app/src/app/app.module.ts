import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {HeaderComponent} from './core/layout/header/header.component';
import {RecipeListComponent} from "./feature/recipes/recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./feature/recipes/recipe-detail/recipe-detail.component";
import {RecipesComponent} from './feature/recipes/recipes.component';
import {ShoppingEditComponent} from "./feature/shopping-list/shopping-edit/shopping-edit.component";
import {ShoppingListComponent} from "./feature/shopping-list/shopping-list.component";

@NgModule({
    declarations: [
        AppComponent,
        ShoppingListComponent,
        ShoppingEditComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        HeaderComponent,
        RecipesComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
