import { LCSService } from './longest-common-substring.service';

fdescribe('Service: Longest Common Substring', () => {

  beforeEach(() => {
    this.service = new LCSService();
  })

  it('should return common substring value', () => {
    const str1 = 'AGGTAB';
    const str2 = 'GXTXAYB';
    const result = 'GTAB';

    // console.log(this.service.substringValue(str1, str2));
    expect(this.service.substringValue(str1, str2).string).toEqual(result);
  })
  it('should return common substring value', () => {
    const str1 = 'AGGTAB';
    const str2 = 'GXTXAYB';
    const result = 4;

    // console.log(this.service.substringValue(str1, str2));
    expect(this.service.substringValue(str1, str2).length).toEqual(result);
  })
});
