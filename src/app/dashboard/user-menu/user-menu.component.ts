import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {User} from '../../_models/user';
import {UserService} from '../../_services/_users/user.service';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private translate: TranslateService) {

        this.translate.addLangs(['en', 'es', 'tr', 'ru']);
        this.translate.setDefaultLang('en');

        let browserLang = this.translate.getBrowserLang();
        console.log('browser lang:%s', browserLang);
        this.translate.use(browserLang.match(/en|es|tr|ru/) ? browserLang : 'en');
    }

    ngOnInit() {
    }

    getCurrentUser(): User {
        return this.userService.getLoggedUser();
    }

    changeLang(lang: string) {
        console.log('locale changed:%s', lang);
        // document['locale'] = lang;
        this.translate.use(lang);
    }

    logout() {
        this.authenticationService.logout();
        document.location.href = 'login';
    }
}
