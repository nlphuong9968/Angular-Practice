import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/models/ingredient.model";
import {ShoppingListService} from "../../core/services/shopping-list.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    private subscription: Subscription;

    constructor(private shoppingListService: ShoppingListService) {
    }

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredient();
        // this.shoppingListService.ingredientAdded.subscribe((newIngredient: Ingredient) => this.ingredients.push(newIngredient));
        this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
            (newIngredients: Ingredient[]) => this.ingredients = newIngredients)

    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
