import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RecipesComponent} from './feature/recipes/recipes.component';
import {ShoppingListComponent} from './feature/shopping-list/shopping-list.component';

const appRoute: Routes = [
    {
        path: '', redirectTo: '/recipes', pathMatch: 'full'
    },
    {
        path: 'recipes', component: RecipesComponent
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
