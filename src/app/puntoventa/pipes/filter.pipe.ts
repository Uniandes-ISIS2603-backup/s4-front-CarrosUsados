import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: number, value: number): any[] {
    if (!items) {
      return [];
    }
    if (!field || !value) {
      return items;
    }

    return items.filter( item => item[field] ==value)
    }
}