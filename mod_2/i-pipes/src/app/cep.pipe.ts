import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cep',
})
export class CepPipe implements PipeTransform {
  transform(value: string) {
    if (value.length === 8) {
      let f = value.substring(0, 5);
      let e = value.substring(5);
      return `${f}-${e}`;
    } else {
      throw new Error('Please provide a CEP with a correct length.');
    }
  }
}
