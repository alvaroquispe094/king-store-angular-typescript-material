import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

export abstract class IUserService {
  abstract getAllUsersByRole(role: string): Observable<UserModel[]>;
  abstract getUserById(id: number | string): Observable<UserModel>;
  abstract createUser(user: UserModel): Observable<UserModel>;
  abstract updateUser(user: UserModel, id: number): Observable<UserModel>;
}
