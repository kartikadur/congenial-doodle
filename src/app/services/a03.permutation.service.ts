/**
 * Based on Next permutation by Tomáš Bouda
 * https://medium.com/100-days-of-algorithms/day-3-next-permutation-ce817f5004e3
 */
/* tslint:disable:no-console */
import { Injectable } from '@angular/core';

import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class A03Service {

  listArray: any[];

  constructor() { }

  getPermutations(list: any[] | string, times = 1) {

    if (typeof list === 'string') {
      this.listArray = list.split('');
    } else {
      this.listArray = list;
    }
    return Observable.create((observer: any) => {
      for (let i = 0; i < times; i++) {
        observer.next(this.permute(this.listArray));
      }
    });
  }

  permute(list: any[]): any {
    const n = list.length;
    let i = n - 2;

    // i: position of pivot
    let pivotFound = false;
    for (; i >= 0; i--) {
      if (list[i] < list[i + 1]) {
        pivotFound = true;
        break;
      }
    }

    // pivot not found flip entire list around
    if (!pivotFound) {
      this.listArray = [...list.reverse()];
      return this.listArray;
    } else {
      for (let j = n - 1; j >= i; j--) {
        if (list[i] < list[j]) {
          // swap pivot and reverse the tail
          [list[i], list[j]] = [list[j], list[i]];
          this.listArray = list.splice(0, i + 1).concat(list.reverse());
          break;
        }
      }
    }
    return this.listArray;
  }
}
