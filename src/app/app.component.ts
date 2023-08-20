import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  browserScreenWidth: number;
  browserScreenHeight: number;
  private screenSizeSubscription: Subscription;

  constructor(private appService: AppService) {

    this.browserScreenWidth = window.innerWidth;
    this.browserScreenHeight = window.innerHeight;

    this.appService.initScreenSize$.subscribe(({ width, height }) => {
      this.browserScreenWidth = width;
      this.browserScreenHeight = height;
    });

    this.screenSizeSubscription = this.appService.screenResize$.subscribe(
      (size) => {
        this.browserScreenWidth = size.width;
        this.browserScreenHeight = size.height;
      }
    );

  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.screenSizeSubscription.unsubscribe();
  }

}
