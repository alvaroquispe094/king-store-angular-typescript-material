import { Observable } from 'rxjs';
import { SignInModel } from '../models/sign-in.model';
import { UserModel } from '../models/user.model';

export abstract class IAuthService {
  abstract signIn(email: string, password: string): Observable<SignInModel>;
  abstract signUp(signUp: UserModel): Observable<unknown>;
}
