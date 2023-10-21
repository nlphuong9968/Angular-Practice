import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    activatedSubject: Subject<boolean> = new Subject<boolean>()

    constructor() {
    }
}
