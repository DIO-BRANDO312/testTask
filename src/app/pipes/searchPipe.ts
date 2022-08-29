import { Pipe, PipeTransform } from '@angular/core';
import { ExtraService } from "services";

@Pipe({
  name: 'search',
})

export class SearchPipe implements PipeTransform {

  constructor(
    private extraService: ExtraService
  ) {}


  transform(arr: any, value: string, item: string) {
    if (arr.length === 0 || value === '') {
      return arr;
    }
    const filteredArr = arr.filter((p: any) => p[item].toLowerCase().indexOf(value.toLowerCase()) !== -1);
    this.extraService.foundResult = filteredArr.length > 0
    return filteredArr
  }
}
