import { Injectable } from '@angular/core';

import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class A01Service {

  constructor() {

  }

  getHanoiResult(disks = 3): any {
    return Observable.from(this.Hanoi(disks));
  }

  // Generator Function for Towers of Hanoi Algorithm
  *Hanoi(height: number, from = 0, to = 2, aux = 1): any {
    if (height) {
      yield* this.Hanoi(height - 1, from, aux, to);
      yield { from, to };
      yield* this.Hanoi(height - 1, aux, to, from);
    }
  }

}
