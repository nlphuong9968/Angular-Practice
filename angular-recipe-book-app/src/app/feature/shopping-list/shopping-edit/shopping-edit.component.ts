import {Component, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from "../../../shared/models/ingredient.model";
import {ShoppingListService} from "../../../core/services/shopping-list.service";

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;

    constructor(private shoppingListService: ShoppingListService) {
    }

    onAddIngredient() {
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;
        const newIngredient = new Ingredient(ingName, ingAmount);

        // this.shoppingListService.ingredientAdded.emit(newIngredient);

        this.shoppingListService.onAddedIngredient(newIngredient);
    }

}
