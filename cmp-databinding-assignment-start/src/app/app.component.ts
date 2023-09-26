import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    evenNumbers: number[] = [];
    oddNumbers: number[] = [];

    onIntervalFired(eventNumber: number) {
        eventNumber % 2 === 0 ? this.evenNumbers.push(eventNumber) : this.oddNumbers.push(eventNumber);
    }
}
