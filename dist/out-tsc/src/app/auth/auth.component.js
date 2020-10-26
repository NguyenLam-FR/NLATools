import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AuthComponent = /** @class */ (() => {
    let AuthComponent = class AuthComponent {
        constructor(authService, router) {
            this.authService = authService;
            this.router = router;
        }
        ngOnInit() {
            this.authStatus = this.authService.isAuth;
        }
        onSignIn() {
            this.authService.signIn().then(() => {
                this.authStatus = this.authService.isAuth;
                this.router.navigate(['appareils']);
            });
        }
        onSignOut() {
            this.authService.signOut();
            this.authStatus = this.authService.isAuth;
        }
    };
    AuthComponent = __decorate([
        Component({
            selector: 'app-auth',
            templateUrl: './auth.component.html',
            styleUrls: ['./auth.component.scss']
        })
    ], AuthComponent);
    return AuthComponent;
})();
export { AuthComponent };
//# sourceMappingURL=auth.component.js.map