/**
 * Based on Matrix chain multiplication by Tomáš Bouda
 * https://medium.com/100-days-of-algorithms/day-2-matrix-chain-multiplication-3ae6349c34ab
 */
import { Injectable } from '@angular/core';

import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class A02Service {
  keys = ['cost', 'order', 'row', 'cols'];
  aux: object;

  constructor() { }

  getMcmResult(chain: any): Observable<{}> {
    return Observable.of(this.mcm(chain));
  }

  mcm(chain: any): Array<{}> {
    const n = chain.length;
    this.aux = {};

    // Single matrix chain has zero cost
    chain.map((e: any, i: string) => {
      this.aux[String([i, i])] = [0, ...e];
    });

    // i: length of subchain
    for (let i = 0; i < n; i++) {

      // j: starting index of subchain
      for (let j = 0; j < n - i; j++) {
        let best = Number.POSITIVE_INFINITY;

        // k: splitting point of subchain
        for (let k = j; k < j + i; k++) {
          if (this.aux[String([j, k])] !== undefined &&
            this.aux[String([k + 1, j + i])] !== undefined) {
            const [lcost, lname, lrow, lcol] = this.aux[String([j, k])];
            const [rcost, rname, rrow, rcol] = this.aux[String([k + 1, j + i])];

            const cost = lcost + rcost + lrow * lcol * rcol;
            const resultMat = `(${lname}${rname})`;

            if (cost < best) {
              best = cost;
              this.aux[String([j, j + i])] = [cost, resultMat, lrow, rcol];
            }
          }
        }
      }
    }

    return this.aux[String([0, n - 1])].reduce((obj: object, e: any, i: any) => {
      obj[this.keys[i]] = e;
      return obj;
    }, {})
  }
}
