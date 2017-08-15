import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()

export class ArrayService {

  constructor() { }

  // padTo >= arr1.length always due to maxLength property
  padArray(arr1: [], padTo: number): [] {
    return [...arr1, ...new Array(padTo - arr1.length).fill(0)]
  }

  // Equivalent to python's zip_longest
  zipLongest(arr1: [], arr2: []): [] {
    const maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;
    return [
      this.padArray(arr1, maxLength),
      this.padArray(arr2, maxLength),
    ]
  }
}
