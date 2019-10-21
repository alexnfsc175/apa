
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { EchoConfig, EchoService, ECHO_CONFIG } from './service/echo.service';
import { EchoInterceptor } from './service/interceptor.service';




@NgModule({
  imports: [
    CommonModule
  ]
})
export class NgLaravelEchoModule {
  /**
   * Make the service and interceptor available for the current (root) module, it is recommended that this method
   * is only called from the root module otherwise multiple instances of the service and interceptor will be created
   * (one for each module it is called in)
   */
  public static forRoot(config: EchoConfig): ModuleWithProviders {
    return {
      ngModule: NgLaravelEchoModule,
      providers: [
        EchoService,
        { provide: HTTP_INTERCEPTORS, useClass: EchoInterceptor, multi: true },
        { provide: ECHO_CONFIG, useValue: config },
      ]
    };
  }
}
