/**
 * Based on Eratosthenes sieve by Tomáš Bouda (based on Eratosthenes Sieve algorithm)
 * https://medium.com/100-days-of-algorithms/day-5-eratosthenes-sieve-60ab162a1f5b
 */
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()

export class A05Service {
  constructor() { }

  getEratosthenesResult(limit = 100): Observable<number[]> {

    return Observable.of(this.eratosthenes(limit));
  }

  eratosthenes(limit: number): number[] {
    const sieve = new Array(limit).fill(1);
    const primes = [];
    for (let i = 2; i < limit; i += 1) {
      if (sieve[i] === 1) {
        for (let j = i * i; j < limit; j += i) {
          sieve[j] = 0;
        }
      }
    }

    // Make use of the fact that array items are stored as key value pairs
    for (const key in sieve) {
      if (sieve.hasOwnProperty(key)) {
        if (+key > 1 && sieve[key] === 1) {
          primes.push(+key);
        }
      }
    }

    return primes;
  }
}
