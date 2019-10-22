import { InjectionToken } from '@angular/core';

export abstract class EchoAuthService {
  abstract getToken(): string | number;
}

export const AUTH_SERVICE = new InjectionToken<EchoAuthService>('echo.auth');
