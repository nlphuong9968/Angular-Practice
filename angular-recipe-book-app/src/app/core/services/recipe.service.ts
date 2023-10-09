import {Recipe} from "../models/recipe.model";

export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simply test',
            'https://www.foodandwine.com/thmb/Hb86ayDLFHpGOuvbziM5Z5c4XNc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Gnocchi-Parisienne-FT-RECIPE0523-a2ca65b48ffc4569adf8baafd009dfaa.jpg'),
        new Recipe('Another Test Recipe', 'This is a simply test',
            'https://www.foodandwine.com/thmb/Hb86ayDLFHpGOuvbziM5Z5c4XNc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Gnocchi-Parisienne-FT-RECIPE0523-a2ca65b48ffc4569adf8baafd009dfaa.jpg'),
    ];

    getRecipe() {
        return this.recipes.slice();
    }
}
