import { Observable } from 'rxjs';
import { UseCase } from '../base/use-case';
import { UserModel } from '../models/user.model';
import { IUserService } from '../services/iuser.service';

export class GetUsersUseCase implements UseCase<string, UserModel[]> {
  constructor(private userService: IUserService) {}

  execute(role: string): Observable<UserModel[]> {
    return this.userService.getAllUsersByRole(role);
  }
}
