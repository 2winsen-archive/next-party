import { ImageNamePipe } from './image-name.pipe';

describe('ImageNamePipe', () => {
  it('should format path to year', () => {
    const pipe = new ImageNamePipe();
    expect(pipe.transform('assets/2020.webp')).toEqual('2020');
    expect(pipe.transform('any/2020any')).toEqual('2020');
    expect(pipe.transform('10')).toEqual('');
  });
});
