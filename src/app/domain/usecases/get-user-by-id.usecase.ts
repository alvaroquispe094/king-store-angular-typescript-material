import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { UserModel } from '../models/user.model';
import { IUserService } from '../services/iuser.service';

export class GetUserByIdUseCase implements UseCase<number, UserModel> {
  constructor(private userService: IUserService) {}

  execute(id: number): Observable<UserModel> {
    return this.userService.getUserById(id);
  }
}
