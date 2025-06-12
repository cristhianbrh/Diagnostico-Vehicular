import 'reflect-metadata';
import { container } from 'tsyringe';

import { IUserService } from './services/user/user.service.interface';
import { IAuthService } from './services/auth/auth.service.interface';
import { IVehicleService } from './services/vehicle/vehicle.service.interface';
import { IDtcService } from './services/dtc/dtc.service.interface';
import { IScannerService } from './services/scanner/scanner.service.interface';
import { ISymptomService } from './services/symptom/symptom.service.interface';

import { UserService } from './services/user/user.service';
import { AuthService } from './services/auth/auth.service';
import { VehicleService } from './services/vehicle/vehicle.service';
import { DtcService } from './services/dtc/dtc.service';
import { ScannerService } from './services/scanner/scanner.service';
import { SymptomService } from './services/symptom/symptom.service';

container.register<IUserService>('IUserService', {
  useClass: UserService,
});

container.register<IAuthService>('IAuthService', {
  useClass: AuthService,
});

container.register<IVehicleService>('IVehicleService', {
  useClass: VehicleService,
});

container.register<IDtcService>('IDtcService', {
  useClass: DtcService,
});

container.register<IScannerService>('IScannerService', {
  useClass: ScannerService,
});

container.register<ISymptomService>('ISymptomService', {
  useClass: SymptomService,
});

export { container };