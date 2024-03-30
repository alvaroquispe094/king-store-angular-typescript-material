import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { IAuthService } from '../services/iauth.service';
import { UserModel } from '../models/user.model';

export class SignUpUseCase implements UseCase<UserModel, unknown> {
  constructor(private authService: IAuthService) {}

  execute(signUp: UserModel): Observable<unknown> {
    return this.authService.signUp(signUp);
  }
}
