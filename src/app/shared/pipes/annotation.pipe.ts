import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'annotation-svg'
})
export class AnnotationPipe implements PipeTransform {
  transform(items: any[], field: string, arrayFilter: any[]): any[] {
    if (!items) {
      return [];
    }

    return items.filter(item => {
      const a = arrayFilter.findIndex(x => x.Id === item.Id);
      return (a < 0) ? true : false;
    });
  }
}
