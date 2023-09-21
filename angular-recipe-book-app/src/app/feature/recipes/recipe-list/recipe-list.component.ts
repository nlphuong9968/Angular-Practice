import {Component} from '@angular/core';
import {Recipe} from "../../../core/models/recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simply test',
            'https://www.foodandwine.com/thmb/Hb86ayDLFHpGOuvbziM5Z5c4XNc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Gnocchi-Parisienne-FT-RECIPE0523-a2ca65b48ffc4569adf8baafd009dfaa.jpg')
    ];

    constructor() {
    }
}
