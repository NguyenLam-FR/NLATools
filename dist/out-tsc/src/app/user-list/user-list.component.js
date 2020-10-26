import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserListComponent = /** @class */ (() => {
    let UserListComponent = class UserListComponent {
        constructor(userService) {
            this.userService = userService;
        }
        ngOnInit() {
            this.userSubscription = this.userService.userSubject.subscribe((users) => {
                this.users = users;
            });
            this.userService.emitUser();
        }
        ngOnDestroy() {
            this.userSubscription.unsubscribe();
        }
    };
    UserListComponent = __decorate([
        Component({
            selector: 'app-user-list',
            templateUrl: './user-list.component.html',
            styleUrls: ['./user-list.component.scss']
        })
    ], UserListComponent);
    return UserListComponent;
})();
export { UserListComponent };
//# sourceMappingURL=user-list.component.js.map