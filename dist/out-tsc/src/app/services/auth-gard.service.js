import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let AuthGard = /** @class */ (() => {
    let AuthGard = class AuthGard {
        constructor(authService, router) {
            this.authService = authService;
            this.router = router;
        }
        canActivate(route, state) {
            if (this.authService.isAuth) {
                return true;
            }
            else {
                this.router.navigate(['/auth']);
            }
        }
    };
    AuthGard = __decorate([
        Injectable()
    ], AuthGard);
    return AuthGard;
})();
export { AuthGard };
//# sourceMappingURL=auth-gard.service.js.map