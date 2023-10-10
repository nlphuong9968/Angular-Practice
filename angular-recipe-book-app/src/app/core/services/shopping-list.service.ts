import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../../shared/models/ingredient.model";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    // ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
    //the other way
    ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    constructor() {
    }

    getIngredient() {
        return this.ingredients.slice();
    }

    addedIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }


    addedIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
