import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../core/models/recipe.model";
import {RecipeService} from "../../core/services/recipe.service";

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    selectedRecipe: Recipe;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit(): void {
        this.recipeService.recipeSelected.subscribe((recipe: Recipe) => this.selectedRecipe = recipe);
    }


}
