/**
 * Based on Longest common substring algorithm by Tomáš Bouda
 * https://medium.com/100-days-of-algorithms/day-37-longest-common-subsequence-9709df2b4fb2
 */
import { Injectable } from '@angular/core';

@Injectable()

export class LCSService {

  constructor() { }

  // Assuming str1 and str2 are non-zero length
  substringValue(str1: string, str2: string): object {
    const [rowCount, colCount] = [str1.length, str2.length];
    const substringMatrix = new Array(rowCount + 1);

    for (let row = 0; row <= rowCount - 1; row++) {
      substringMatrix[row] = new Uint8Array(colCount + 1);
    }

    for (let row = 0; row < rowCount; row++) {
      for (let col = 0; col < colCount; col++) {
        // Initialize substring matrix array
        if (row === 0 || col === 0) {
          substringMatrix[row][col] = 0;
        } else if (str1[row - 1] === str2[col - 1]) {
          substringMatrix[row][col] = substringMatrix[row - 1][col - 1] + 1;
        } else {
          substringMatrix[row][col] = Math.max(substringMatrix[row - 1][col], substringMatrix[row][col - 1]);
        }
      }
    }

    let [rCounter, cCounter] = [rowCount, colCount];
    let commonSubstring = '';
    while (rCounter > 0 && cCounter > 0) {
      if (str1[rCounter - 1] === str2[cCounter - 1]) {
        commonSubstring = str1[rCounter - 1] + commonSubstring;
        rCounter -= 1;
        cCounter -= 1;
      } else if (substringMatrix[rCounter - 1][cCounter] >= substringMatrix[rCounter][cCounter - 1]) {
        rCounter -= 1;
      } else {
        cCounter -= 1;
      }
    }

    return {
      string: commonSubstring,
      length: substringMatrix[rowCount][colCount],
    };
  }
}
