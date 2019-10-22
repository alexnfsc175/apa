import { Component, OnInit } from '@angular/core';
import { EchoService } from '@alexpa/laravel-echo';
import { Channel } from 'laravel-echo/dist/channel';

@Component({
  selector: 'home-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'home';

  constructor(private echoService: EchoService) {
  }
  ngOnInit(): void {

    this.echoService.join('follow-up', 'public')
      .listen('follow-up', '.event.late.19').subscribe(data => console.log('obser: ', data));

    const userId = 1;
    this.echoService
      .login(userId)
      .notification('*')
      .subscribe({
        next: data => console.log('notification', data),
        error: error => console.error(error),
        complete: console.log
      });

    console.log(this);
  }


}
