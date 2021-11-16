import {Pipe, PipeTransform} from '@angular/core';
import {Item} from "./item.interface";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Item[], filterString: string): Item[] {
    if (filterString === '') {
      return value;
    }

    return value.filter((i) => {
      return i.title!.trim().toLocaleLowerCase().includes(filterString.toLocaleLowerCase());
    })
  }

}
