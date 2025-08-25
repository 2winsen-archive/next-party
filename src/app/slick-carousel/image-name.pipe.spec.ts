import { ImageNamePipe } from './image-name.pipe';

describe('ImageNamePipe', () => {
  it('should format path to year', () => {
    const pipe = new ImageNamePipe();
    expect(pipe.transform('assets/2020.webp')).toEqual('2020');
    expect(pipe.transform('assets/2025-aug.webp')).toEqual('2025-aug');
    expect(pipe.transform('2020.webp')).toEqual('2020');
  });
});
