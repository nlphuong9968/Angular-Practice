import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../../shared/models/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    constructor() {
    }

    getIngredient() {
        return this.ingredients.slice();
    }
}
