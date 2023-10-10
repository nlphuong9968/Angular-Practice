import {Component, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/models/ingredient.model";
import {ShoppingListService} from "../../core/services/shopping-list.service";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[];

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredient();
        // this.shoppingListService.ingredientAdded.subscribe((newIngredient: Ingredient) => this.ingredients.push(newIngredient));
        this.shoppingListService.ingredientsChanged.subscribe((newIngredients: Ingredient[]) => this.ingredients = newIngredients)
        
    }
}
