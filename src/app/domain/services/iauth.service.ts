import { Observable } from 'rxjs';
import { SignInModel } from '../models/sign-in.model';
import { SignUpModel } from '../models/sign-up.model';

export abstract class IAuthService {
  abstract signIn(email: string, password: string): Observable<SignInModel>;
  abstract signUp(signUp: SignUpModel): Observable<unknown>;
}
