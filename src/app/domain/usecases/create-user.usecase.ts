import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { UserModel } from '../models/user.model';
import { IUserService } from '../services/iuser.service';

export class CreateUserUseCase implements UseCase<UserModel, unknown> {
  constructor(private userService: IUserService) {}

  execute(user: UserModel): Observable<unknown> {
    return this.userService.createUser(user);
  }
}
