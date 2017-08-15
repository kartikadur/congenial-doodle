/**
 * Based on McCarty91 formal verification code by Tomáš Bouda
 * https://medium.com/100-days-of-algorithms/day-11-mccarthy-91-462e15361bc7
 */
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()

export class A11Service {

  constructor() { }

  getResult(value: number): Observable<number> {

    return Observable.of(this.mccarthy(value));
  }

  // a triple of value > 100, value -= 10, & value += 11 always returns 91
  // a triple of value > 100, value -= 9, & value += 10 always returns 92
  // a triple of value > 100, value -= 11, & value += 12 always returns 90
  mccarthy(value: number): number {
    let counter = 1
    while (counter) {
      if (value > 100) {
        value -= 10;
        counter -= 1;
      } else {
        value += 11
        counter += 1
      }
    }
    return value;
  }
}
