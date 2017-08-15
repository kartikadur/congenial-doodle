/**
 * Based on Binary Addition FSA by Tomáš Bouda
 * https://medium.com/100-days-of-algorithms/day-7-binary-addition-fsa-cfb275ac9253
 *
 * possible test values : add('1100100100100', '100100011000') => '10001000111100'
 *
 *  TODO: add -, *, /, % ops?
 */

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ArrayService } from './shared/array.service';

const states = [
  // carry, value
  [0, 0], // c = 0, x = 0, y = 0
  [0, 1], // c = 0, x = 0, y = 1
  [0, 1], // c = 0, x = 1, y = 0
  [1, 0], // c = 0, x = 1, y = 1
  [0, 1], // c = 1, x = 0, y = 0
  [1, 0], // c = 1, x = 0, y = 1
  [1, 0], // c = 1, x = 1, y = 0
  [1, 1], // c = 1, x = 1, y = 1
]

@Injectable()

export class A07Service {
  constructor(private service: ArrayService) { }

  getResult(op: string, x: string, y: string): Observable<string> {
    if (op === '+' || op.toLowerCase() === 'add') {
      return Observable.of(this.add(x, y));
    }
  }

  add(x: string, y: string): string {
    // convert string to reversed array for easy addition of individual bits
    const [xArr, yArr] = this.service.zipLongest(
      x.split('').reverse().map((el) => +el),
      y.split('').reverse().map((el) => +el),
    );
    // const maxLength = xArr.length > yArr.length ? xArr.length : yArr.length;
    const zArr = new Int8Array(maxLength).fill(0);

    // xArr = this.service.padArray(xArr, maxLength);
    // yArr = this.service.padArray(yArr, maxLength);

    let [carry, value] = states[0];

    for (const key in xArr) {
      if (xArr.hasOwnProperty(key)) {
        [carry, value] = states[carry * 4 + xArr[key] * 2 + yArr[key]];

        // Add the value for current sum
        zArr[key] = value;
      }
    }

    // Add the final carry
    zArr.push(carry);
    return zArr.reverse().join('');
  }
}
