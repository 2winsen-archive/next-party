import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'imageName' })
export class ImageNamePipe implements PipeTransform {
  transform(value: string): string {
    const match = value.match(/(\d{4})/);
    return match ? match[1] : '';
  }
}
