import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterEvent: string, sortTime: string) {
    if (sortTime === 'Ascend')
      items.sort((a, b) => {
        return a.time - b.time;
      });
    if (sortTime === 'Descend')
      items.sort((a, b) => {
        return b.time - a.time;
      });

    if (filterEvent !== 'All') {
      return items.filter((element) => element.buttonPressed === filterEvent);
    }
    return items;
  }
}
