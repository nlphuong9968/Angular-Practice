import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private router: Router, private authService: AuthService) {
    }

    ngOnInit() {
    }

    onLoandingServers() {
        this.router.navigate(['servers', 5, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
    }

    onLogout() {
        this.authService.logout();
    }

    onLogin() {
        this.authService.login();
    }
}
