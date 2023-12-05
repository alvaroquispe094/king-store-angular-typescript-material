import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { IAuthService } from '../services/iauth.service';
import { SignUpModel } from '../models/sign-up.model';

export class SignUpUseCase implements UseCase<SignUpModel, unknown> {
  constructor(private authService: IAuthService) {}

  execute(signUp: SignUpModel): Observable<unknown> {
    return this.authService.signUp(signUp);
  }
}
