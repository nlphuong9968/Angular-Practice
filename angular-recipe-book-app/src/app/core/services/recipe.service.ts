import {EventEmitter} from "@angular/core";
import {Recipe} from "../models/recipe.model";
import {Ingredient} from "../../shared/models/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('A Test Recipe',
            'This is a simply test',
            'https://www.foodandwine.com/thmb/Hb86ayDLFHpGOuvbziM5Z5c4XNc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Gnocchi-Parisienne-FT-RECIPE0523-a2ca65b48ffc4569adf8baafd009dfaa.jpg',
            [
                new Ingredient('Meat', 10),
                new Ingredient('Carrot', 5)
            ]),
        new Recipe('Another Test Recipe',
            'This is a simply test',
            'https://www.foodandwine.com/thmb/Hb86ayDLFHpGOuvbziM5Z5c4XNc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Gnocchi-Parisienne-FT-RECIPE0523-a2ca65b48ffc4569adf8baafd009dfaa.jpg',
            [
                new Ingredient('Apple', 6)
            ]
        ),
    ];

    getRecipe() {
        return this.recipes.slice();
    }
}
