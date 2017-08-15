/**
 * Based on Binary search by Tomáš Bouda
 * https://medium.com/100-days-of-algorithms/day-8-binary-search-842f3b700555
 */

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

const searchTypes = {
  binary: this.binarySearch,
}

@Injectable()

export class A08Service {
  constructor() { }

  // prerequisite: array must be sorted
  getSearchResult(type: string, arr: any[], item: any): Observable<number> {
    return Observable.of(searchTypes[type](arr, item));
  }

  binarySearch(arr: any[], item: any): number {

    let [left, right] = [0, arr.length - 1];

    while (left <= right) {
      const middle = Math.floor((left + right) / 2)
      if (item < arr[middle]) {
        right = middle - 1;
      } else if (item > arr[middle]) {
        left = middle + 1;
      } else {
        return middle;
      }
    }

    // item not found in array
    return -1;
  }
}
