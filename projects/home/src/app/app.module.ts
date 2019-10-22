import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaravelEchoModule, EchoConfig, EchoAuthService, AUTH_SERVICE } from '@alexpa/laravel-echo';

class AuthService implements EchoAuthService {
  getToken(): string | number {
    return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM4Y2QxMjUxZmM2NmFhYmFkNjBmOWQyYmNlOGRhMDRjZWVlOGVjYjU3ZDMyZmM3M2I4MzNhZDllMzYwZmY5YmMwNWIzODBhZjQ3ZjkxNTE2In0.eyJhdWQiOiI0IiwianRpIjoiYzhjZDEyNTFmYzY2YWFiYWQ2MGY5ZDJiY2U4ZGEwNGNlZWU4ZWNiNTdkMzJmYzczYjgzM2FkOWUzNjBmZjliYzA1YjM4MGFmNDdmOTE1MTYiLCJpYXQiOjE1NzE3NTcyMDQsIm5iZiI6MTU3MTc1NzIwNCwiZXhwIjoxNTcxNzYwODA0LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.jGY3iHid9Nq8vD-Ur3ZvNajQxusUvN-Vsb9lS0-VtSv29yWyMs_mPWHbVXwe5alROV9iHKZhxiOno2KABhVPeGsFZXhagiSbTR2vmPhqO7rAJqUCB-qppfMDOditPiAUwYgyGdAHW50d0No5Fs3cRSIFV1g4AK079oMQ8j_zlI-bhoxn3-sH7DKF5mKfMs6i8wVTzxkS63TWAVg-XtDFiJwegOhQx7iBMA7178EgInkzhfqXz1FS2oPoEvZWj-lp1C3SJTyNkXjdMbamvIiInDF7jDkCbD79aglcI2bg2dZmxVxx7WvHtMhyg0mctKsGi6pGnEbghfabyguzaK5HR5ZavoysKZAPA7uk2HrRbKGrLpSFLCiKWzj_bRFURRs5CdxRcw7yv3JSjvmMB49kGLIidCTTT4Vuv67Dj1zXoqYucUZLB9_4PZMP38iFeZNjJvb-JSX2SfjL0kuNTIL46GQLhEmLpByXuEm3McVhseaUMLt6DPfbgVY4sGNwq-ff0VO3VOD6uJ5jEJV2ZNbjQpyr2L2KPkVJjofyt6kY0ZFAnCIsqyRSYZ5dNZh1O3FdBOt3B7CWWiCyQuOF6RL0_U_HkZyFfR_HU84l5lS5FJkj6XwrpO5089qRbmnhkiMseJnEWxiaOCUVfkyGkjDueXT_pIE8hn7IN5IQnn-TXy0';
  }
}

export const echoConfig: EchoConfig = {
  userModel: 'App.Linkmex.User',
  notificationNamespace: 'App\\Linkmex\\Notifications',
  options: {
    namespace: 'App.Linkmex',
    broadcaster: 'socket.io',
    host: window.location.hostname + ':8890',
    authEndpoint: '/api/broadcasting/auth'
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LaravelEchoModule.forRoot({
      config: echoConfig
    }),
  ],
  providers: [{ provide: AUTH_SERVICE, useClass: AuthService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
