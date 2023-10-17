import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../../core/models/recipe.model";
import {RecipeService} from "../../../core/services/recipe.service";
import {Ingredient} from "../../../shared/models/ingredient.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    id: number;

    constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.id);
        })
    }

    onAddIngredientsToSL(ingredients: Ingredient[]) {
        this.recipeService.addIngredientsToSL(ingredients);
    }
}
