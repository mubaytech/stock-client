import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'unSlug'
})
export class UnSlugPipe implements PipeTransform {

  transform(value: string, lowercase?: boolean): unknown {
    return (value.replace('_', ' '))[lowercase ? 'toLowerCase' : 'toString']();
  }

}
