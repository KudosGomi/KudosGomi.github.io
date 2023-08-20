import { Injectable } from '@angular/core';
import { fromEvent, map, Observable, of } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  browserScreenWidth: number;
  browserScreenHeight: number;
  screenSizeChanged = new EventEmitter<number>();

  constructor() {

    this.browserScreenWidth = window.innerWidth;
    this.browserScreenHeight = window.innerHeight;

  }

  ngOnInit(): void {
    console.log("NGOnInit: Const Width & Height: " + this.browserScreenWidth + " : " + this.browserScreenHeight);
  }

  get initScreenSize$(): Observable<{ width: number; height: number }> {
    return of({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  get screenResize$(): Observable<{ width: number; height: number }> {
    return fromEvent(window, 'resize').pipe(
      // Map the event to the screen dimensions
      map(() => ({
        width: window.innerWidth,
        height: window.innerHeight
      }))
    );
  }

}
