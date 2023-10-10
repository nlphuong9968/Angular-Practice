import {Component, Input} from '@angular/core';
import {Recipe} from "../../../core/models/recipe.model";
import {RecipeService} from "../../../core/services/recipe.service";
import {Ingredient} from "../../../shared/models/ingredient.model";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
    @Input() recipe: Recipe;

    constructor(private recipeService: RecipeService) {
    }

    onAddIngredientsToSL(ingredients: Ingredient[]) {
        this.recipeService.addIngredientsToSL(ingredients);
    }
}
