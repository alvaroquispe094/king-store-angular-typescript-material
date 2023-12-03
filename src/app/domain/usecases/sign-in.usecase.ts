import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { LoginResponseModel } from '../models/login-response.model';
import { IAuthService } from '../services/iauth.service';

export class SignInUseCase implements UseCase<unknown, LoginResponseModel> {
  constructor(private authService: IAuthService) {}

  execute(params: { email: string; password: string }): Observable<LoginResponseModel> {
    return this.authService.login(params.email, params.password);
  }
}
