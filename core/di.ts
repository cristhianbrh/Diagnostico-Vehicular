import 'reflect-metadata';
import { container } from 'tsyringe';

import { IUserService } from './services/user/user.service.interface';
import { IAuthService } from './services/auth/auth.service.interface';

import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { IVehicleService } from './services/vehicle/vehicle.service.interface';
import { VehicleService } from './services/vehicle/vehicle.service';

container.register<IUserService>('IUserService', {
  useClass: UserService,
});

container.register<IAuthService>('IAuthService', {
  useClass: AuthService,
});

container.register<IVehicleService>('IVehicleService', {
  useClass: VehicleService,
});

export { container };