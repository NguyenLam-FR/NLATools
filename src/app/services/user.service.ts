import { User } from "../models/User.model";
import { Subject } from "rxjs/Subject";

export class UserService {
	private users: User[] = [
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
	userSubject = new Subject<User[]>();

	emitUser(){
		this.userSubject.next(this.users.slice());
	}

	addUser(user: User){
		this.users.push(user);
		this.emitUser();
	}
}