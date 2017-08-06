/**
 * Based on Postfix notation by Tomáš Bouda
 * https://medium.com/100-days-of-algorithms/day-6-postfix-notation-b63d8f0fbaf4
 *
 * TODO: Add infix and prefix?
 */

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

// This by no means does boundary or error checking
const solve = {
  '+': (x: number, y: number) => {
    return x + y;
  },
  '-': (x: number, y: number) => {
    return x - y;
  },
  '*': (x: number, y: number) => {
    return x * y;
  },
  '/': (x: number, y: number) => {
    return x / y;
  },
}

@Injectable()

export class A06Service {
  constructor() { }

  // for the time being sticking with post fix, may include prefix, infix, etc later
  getEvaluatedExpression(expression: string, type = 'postfix'): Observable<number> {
    if (type === 'postfix') {
      return Observable.of(this.postfix(expression));
    }

  }

  postfix(expression: string): number {
    const stack = [];

    // Not accounting for boundary conditions of improperly formed expressions
    for (let i of expression.split(' ')) {
      if (i in solve) {
        i = solve[i](+stack.splice(-2, 1), +stack.splice(-1, 1));
      }
      // To ensure that only numbers are added to the stack
      stack.push(+i);
    }
    return stack.pop();
  }
}
