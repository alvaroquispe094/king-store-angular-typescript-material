import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { SignInModel } from '../models/sign-in.model';
import { IAuthService } from '../services/iauth.service';

export class SignInUseCase implements UseCase<unknown, SignInModel> {
  constructor(private authService: IAuthService) {}

  execute(params: { email: string; password: string }): Observable<SignInModel> {
    return this.authService.signIn(params.email, params.password);
  }
}
