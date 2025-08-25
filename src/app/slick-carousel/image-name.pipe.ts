import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageName',
  standalone: false,
})
export class ImageNamePipe implements PipeTransform {
  transform(value: string): string {
    const lastIndexOfSlash = value.lastIndexOf('/');
    let fileAndExt = value;
    if (lastIndexOfSlash !== -1) {
      fileAndExt = value.substring(value.lastIndexOf('/') + 1);
    }
    return fileAndExt.substring(0, fileAndExt.lastIndexOf('.'));
  }
}
