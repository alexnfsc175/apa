
import { EchoAuthService } from './auth.service';


export class NoopAuthService implements EchoAuthService {
  getToken(): string | number {
    return '';
  }
}
