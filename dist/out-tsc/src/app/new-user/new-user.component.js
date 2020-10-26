import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { User } from "../models/User.model";
let NewUserComponent = /** @class */ (() => {
    let NewUserComponent = class NewUserComponent {
        constructor(formBuilder, userService, router) {
            this.formBuilder = formBuilder;
            this.userService = userService;
            this.router = router;
        }
        ngOnInit() {
            this.initForm();
        }
        initForm() {
            this.userForm = this.formBuilder.group({
                firstName: ['', Validators.required],
                lastName: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]],
                drinkPreference: ['', Validators.required],
                hobbies: this.formBuilder.array([])
            });
        }
        onSubmitForm() {
            const formValue = this.userForm.value;
            const newUser = new User(formValue['firstName'], formValue['lastName'], formValue['email'], formValue['drinkPreference'], formValue['hobbies'] ? formValue['hobbies'] : []);
            this.userService.addUser(newUser);
            this.router.navigate(['/users']);
        }
        getHobbies() {
            return this.userForm.get('hobbies');
        }
        onAddHobby() {
            const newHobbyControl = this.formBuilder.control(null, Validators.required);
            this.getHobbies().push(newHobbyControl);
        }
    };
    NewUserComponent = __decorate([
        Component({
            selector: 'app-new-user',
            templateUrl: './new-user.component.html',
            styleUrls: ['./new-user.component.scss']
        })
    ], NewUserComponent);
    return NewUserComponent;
})();
export { NewUserComponent };
//# sourceMappingURL=new-user.component.js.map