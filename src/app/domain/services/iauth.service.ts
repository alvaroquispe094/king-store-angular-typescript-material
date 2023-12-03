import { Observable } from 'rxjs';
import { SignInModel } from '../models/sign-in.model';
import { RegisterModel } from '../models/register.model';

export abstract class IAuthService {
  abstract signIn(email: string, password: string): Observable<SignInModel>;
  abstract signUp(register: RegisterModel): Observable<unknown>;
}
