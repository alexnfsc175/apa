import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgLaravelEchoModule, EchoConfig } from '@apa/laravel-echo';


export const echoConfig: EchoConfig = {
  userModel: 'App.Linkmex.User',
  notificationNamespace: 'App\\Linkmex\\Notifications',
  options: {
    namespace: 'App.Linkmex',
    broadcaster: 'socket.io',
    host: window.location.hostname + ':8890',
    authEndpoint: '/api/broadcasting/auth',
    auth: {
      headers: {
        // tslint:disable-next-line: max-line-length
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImM4MTUyYTE2MzZmNGZlOGZlMTM0OWZlZDJmNjRmMmE2N2Q4NWRkZTExOTk1ODdhMTJkMGM1YmRlYmIyNmFmZWFhMDViYTRhMzYwYTY4ZjVhIn0.eyJhdWQiOiI0IiwianRpIjoiYzgxNTJhMTYzNmY0ZmU4ZmUxMzQ5ZmVkMmY2NGYyYTY3ZDg1ZGRlMTE5OTU4N2ExMmQwYzViZGViYjI2YWZlYWEwNWJhNGEzNjBhNjhmNWEiLCJpYXQiOjE1NzE2ODA1MTgsIm5iZiI6MTU3MTY4MDUxOCwiZXhwIjoxNTcxNjg0MTE4LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.nkUHLRFhFxkwqlJQ16dGNjaLf5kFG37en559lmnyR4GsFDhSLxVEXCCEHq6QGNz0LNUxlXo5HcqTUpuUgZR2taOj-MT4qXuGv43T4YSA3iQfngeUpWmrLuX-nhhq2fs1_J8ZY86RCVWICeerkYWMTL_1W01kmOrc5J7-OK1Bn1acmXgGvuNparmzNabPcqvM67Xrgz13jIAnYYrxrp6gGRgE9XzSxRJ7DlEqJOeJC5vM_zBI09MxBvHnVikPeqr7-d_IARhBnUsj3XDv-JxS1zRGpRb1E8HzknILGarMDwSEvT1UWNXohMxqBMyyPxpMkh-mq1YSJgtJZEUbMt8tZMIoVoR9zdX0ZHIbom_mfnvduzXnryosNDGpIkNErcA8c3lotXv59JeZmQDfYEYUyDM-CTKG-QJRpN2Fz3fA-R2stG0QTw3rSMqyRZ7vhYk6cAducCYS3ttLCDiQU37etC9UaoJrSRGssaLUmOLMxX4pmS_Ra2Cmj7QJPRkxrOtRnrjxDepKwSlvSQp9TNldit9gJrVjjCNW3Crs5tQ2JG7IPsmqWROUWYnI9K3fszhfy7WbLV1j8Xg6azZ1HZ-qGPE51OqdB7kATgUqSsvKn8bJxks8fbFP8JlvPikTAOg6vUjVwl1RAFvjLQTQkPDkNeVf6OhJVflhjxDfLZQqTQs'
      }
    },
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgLaravelEchoModule.forRoot(echoConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
