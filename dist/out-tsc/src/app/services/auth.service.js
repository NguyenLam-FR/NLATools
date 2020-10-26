export class AuthService {
    constructor() {
        this.isAuth = false;
    }
    signIn() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.isAuth = true;
                resolve(true);
            }, 2000);
        });
    }
    signOut() {
        this.isAuth = false;
    }
}
//# sourceMappingURL=auth.service.js.map