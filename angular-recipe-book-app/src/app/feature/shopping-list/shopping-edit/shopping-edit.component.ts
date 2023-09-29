import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../../shared/models/ingredient.model";

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
    // @ViewChild('nameInput') nameInputRef: ElementRef;
    // @ViewChild('amountInput') amountInputRef: ElementRef;
    @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<{ name: string, amount: number }>();

    // onAddIngredient() {
    //     // const ingName = this.nameInputRef.nativeElement.value;
    //     // const ingAmount = this.amountInputRef.nativeElement.value;
    //     // const newIngredient = new Ingredient(ingName, ingAmount);
    //
    //     this.ingredientAdded.emit(newIngredient);
    // }

    // My solution
    onAddIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
        const newIngredient = new Ingredient(nameInput.value, Number(amountInput.value));

        this.ingredientAdded.emit(newIngredient);
    }
}
