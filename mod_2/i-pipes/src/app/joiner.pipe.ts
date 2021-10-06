import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joiner',
  pure: false,
})
export class JoinerPipe implements PipeTransform {
  transform(value: string[], separator: string): string {
    return value.join(separator);
  }
}
