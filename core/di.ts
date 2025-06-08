import 'reflect-metadata';
import { container } from 'tsyringe';

import { IUserService } from './services/user/user.service.interface';
import { IAuthService } from './services/auth/auth.service.interface';

import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';

container.register<IUserService>('IUserService', {
  useClass: UserService,
});

container.register<IAuthService>('IAuthService', {
  useClass: AuthService,
});

export { container };