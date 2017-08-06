/**
 * Based on Counting 1-bits by Tomáš Bouda (based on Brian Kerningham's algorithm)
 * https://medium.com/100-days-of-algorithms/day-4-counting-1-bits-f6a23a7dca94
 */
/* tslint:disable:no-bitwise */
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()

export class A04Service {

  constructor() { }

  getBitCounterResult(value: number): Observable<number> {

    return Observable.of(this.bitCounter(value));
  }

  bitCounter(value: number): number {
    let n = 0;
    // Using for loop instead of while loop
    for (; value; n++) {
      value &= value - 1;
    }
    return n;
  }
}
