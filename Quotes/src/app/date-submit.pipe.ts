import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateSubmit'
})
export class DateSubmitPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
