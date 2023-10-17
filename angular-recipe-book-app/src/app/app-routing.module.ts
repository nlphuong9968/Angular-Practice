import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipesComponent} from './feature/recipes/recipes.component';
import {ShoppingListComponent} from './feature/shopping-list/shopping-list.component';
import {RecipeStartComponent} from "./feature/recipes/recipe-start/recipe-start.component";
import {RecipeDetailComponent} from "./feature/recipes/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./feature/recipes/recipe-edit/recipe-edit.component";

const appRoute: Routes = [
    {
        path: '', redirectTo: '/recipes', pathMatch: 'full'
    },
    {
        path: 'recipes', component: RecipesComponent, children: [
            {
                path: '', component: RecipeStartComponent
            },
            {
                path: 'new', component: RecipeEditComponent
            },
            {
                path: ':id', component: RecipeDetailComponent
            },
            {
                path: ':id/edit', component: RecipeEditComponent
            }
        ]
    },
    {
        path: 'shopping-list', component: ShoppingListComponent
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
