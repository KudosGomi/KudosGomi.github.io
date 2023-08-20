import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  browserScreenWidth: number;
  private screenSizeSubscription: Subscription;

  constructor(private appService: AppService) {

    this.browserScreenWidth = this.appService.browserScreenWidth;

    this.appService.initScreenSize$.subscribe(({ width, height }) => {
      this.browserScreenWidth = width;
      // this.browserScreenHeight = height;
    });

    this.screenSizeSubscription = this.appService.screenResize$.subscribe(
      (size) => {
        this.browserScreenWidth = size.width;
        // this.browserScreenHeight = size.height;
      }
    );
  }

}
