import { Subject } from "rxjs/Subject";
export class UserService {
    constructor() {
        this.users = [
            {
                firstName: 'Nguyen',
                lastName: 'Lam',
                email: 'nguyen.lam@gmail.com',
                drinkPreference: 'cocacola',
                hobbies: [
                    'coder',
                    'jouer',
                    'lire'
                ]
            }
        ];
        this.userSubject = new Subject();
    }
    emitUser() {
        this.userSubject.next(this.users.slice());
    }
    addUser(user) {
        this.users.push(user);
        this.emitUser();
    }
}
//# sourceMappingURL=user.service.js.map