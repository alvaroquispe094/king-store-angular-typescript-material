import { Observable } from 'rxjs';
import { LoginResponseModel } from '../models/login-response.model';
import { RegisterModel } from '../models/register.model';

export abstract class IAuthService {
  abstract login(email: string, password: string): Observable<LoginResponseModel>;
  abstract register(register: RegisterModel): Observable<unknown>;
}
