/**
 * Based on Monte carlo - π by Tomáš Bouda
 * https://medium.com/100-days-of-algorithms/day-10-karatsuba-multiplication-a0535cc468e6
 */
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ArrayService } from './shared/array.service';

@Injectable()

export class A10Service {
  constructor(private service: ArrayService) { }

  getMultiplicationResult(x: number, y: number): Observable<number> {

    return Observable.of(this.karatsuba(x, y));
  }

  karatsuba(x: number, y: number): number {

    const [xArr, yArr] = this.service.zipLongest(
      x.toString().split('').reverse().map((el) => +el),
      y.toString().split('').reverse().map((el) => +el),
    );

    return 0;
  }

  add(x: [], y: []): [] {
    let [z, carry] = [[], 0];

    for (const key in x) {
      if (x.hasOwnProperty(key)) {


      }
    }

    return z;
  }
}
