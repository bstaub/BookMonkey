import { IsbnPipe } from '../book/shared/isbn.pipe';

describe('IsbnPipe', () => {
  it('create an instance', () => {
    const pipe = new IsbnPipe();
    expect(pipe).toBeTruthy();
  });
});
