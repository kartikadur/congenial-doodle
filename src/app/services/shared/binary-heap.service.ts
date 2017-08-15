/**
 * TODO: Unit test for min and max heap
 * Based onf js-algorithms: Binary-Heap & Min-Heap by Matt Blair (https://github.com/duereg)
 * https://github.com/duereg/js-algorithms/blob/master/lib/dataStructures/binaryHeap.js
 * https://github.com/duereg/js-algorithms/blob/master/lib/dataStructures/minHeap.js
 */
import { Injectable } from '@angular/core';

@Injectable()

export class BinaryHeap {
  heap: any[];

  constructor(data: any[]) {
    this.heap = data;
    const length = this.heap.length;

    for (let i = this.getParent(length); i >= 0; i--) {
      this.bubbleDown(i);
    }
  }

  get size(): number {
    return this.heap.length;
  }

  getParent(i: number): number {
    return Math.floor((i - 1) / 2);
  }

  getLeftChild(i: number): number {
    return i * 2 + 1;
  }

  getRightChild(i: number): number {
    return i * 2 + 2;
  }

  /**
   * Must be implemented at runtime
   * @param childValue
   * @param parentValue
   * @returns boolean
   */
  shouldSwap(childValue: any, parentValue: any): boolean {
    throw new Error('Method should be implemented by concrete implementation');
  }

  add(data: any) {
    if (data === undefined) {
      throw new Error('cannot add undefined to heap');
    }

    this.heap.push(data);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index: number) {
    if (index > 0) {
      const childValue = this.heap[index];
      const parentIndex = this.getParent(index);
      const parentValue = this.heap[parentIndex];

      if (this.shouldSwap(childValue, parentValue)) {
        [this.heap[parentIndex], this.heap[index]] = [childValue, parentValue];
        this.bubbleUp(parentIndex);
      }
    }
  }

  bubbleDown(index: number) {
    if (index < this.heap.length) {
      const leftChildIndex = this.getLeftChild(index);
      const leftChildValue = this.heap[leftChildIndex];
      const rightChildIndex = this.getRightChild(index);
      const rightChildValue = this.heap[rightChildIndex];

      let targetIndex = index;
      const targetValue = this.heap[index];

      if (
        leftChildIndex < this.heap.length &&
        this.shouldSwap(leftChildValue, targetValue)
      ) {
        targetIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.heap.length &&
        this.shouldSwap(rightChildValue, targetValue)
      ) {
        targetIndex = rightChildIndex;
      }
      if (targetIndex !== index) {
        [this.heap[index], this.heap[targetIndex]] = [this.heap[targetIndex], this.heap[index]]
        this.bubbleDown(targetIndex);
      }
    }
  }

  extractHead(): any {
    const head = this.heap[0];
    const tail = this.heap[this.heap.length - 1];

    if (this.heap.length > 0) {
      this.bubbleDown(0);
    }

    return head;
  }
}
