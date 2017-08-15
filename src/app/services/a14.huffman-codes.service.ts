/**
 * Based on Huffman codes by Tomáš Bouda
 * https://medium.com/100-days-of-algorithms/day-14-huffman-codes-d712bbb0cd10
 */

import { Injectable } from '@angular/core';

import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';

import { BinaryHeap } from './shared/binary-heap.service';

export class A14Service {

  constructor(
    private minHeap: BinaryHeap,
  ) {
    // ensures that the Binary-Heap is a Min-Heap
    // data elements are added as tuples of [char, occurance]
    this.minHeap.shouldSwap = (childValue: any[], parentValue: any[]) => {
      return childValue[0] < parentValue[0]
    }
  }

  getHuffmanCodes(text: string): Observable<object> {
    this.createHuffmanTree(text);
    return Observable.from(this.createCodes(this.minHeap.extractHead()));
  }

  *createCodes(data: any[] | string, code = ''): any {
    if (data instanceof Array) {
      yield* this.createCodes(data[0], code + '0');
      yield* this.createCodes(data[1], code + '1');
    } else {
      yield { data, code };
    }
  }

  createHuffmanTree(text: string) {
    const charFreqs = this.createCounter(text);
    for (const i in charFreqs) {
      if (charFreqs.hasOwnProperty(i)) {
        this.minHeap.add([charFreqs[i], i]);
      }
    }

    while (this.minHeap.size > 1) {
      const [leftIndex, leftValue] = this.minHeap.extractHead();
      const [rightIndex, rightValue] = this.minHeap.extractHead();
      this.minHeap.add([leftIndex + rightIndex, [leftValue, rightValue]]);
    }
  }

  createCounter(text: string): object {
    const newObject = {};
    for (const i of text) {
      if (newObject.hasOwnProperty(i)) {
        newObject[i] += 1;
      } else {
        newObject[i] = 1;
      }
    }

    return newObject;
  }
}
