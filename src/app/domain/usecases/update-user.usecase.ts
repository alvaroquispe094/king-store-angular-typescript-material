import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { UserModel } from '../models/user.model';
import { IUserService } from '../services/iuser.service';

export class UpdateUserUseCase implements UseCase<unknown, UserModel> {
  constructor(private userService: IUserService) {}

  execute(params: { user: UserModel; id: number }): Observable<UserModel> {
    return this.userService.updateUser(params.user, params.id);
  }
}
