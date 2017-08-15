/**
 * Based on Monte carlo - π by Tomáš Bouda
 * https://medium.com/100-days-of-algorithms/day-9-monte-carlo-%CF%80-7ae010743bde
 *
 *  On the back burner for now till I find or create suitable alternatives for some required functionality
 */

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()

export class A09Service {

  constructor() { }

  getPiValue(n: number, batch: number): Observable<number> {

    return Observable.of(this.pi(n, batch));

  }

  pi(n: number, batch = 1000): number {
    return 3.14;
  }
}
