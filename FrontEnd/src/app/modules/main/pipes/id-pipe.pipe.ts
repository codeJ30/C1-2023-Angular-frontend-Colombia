import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idPipe'
})
export class IdPipePipe implements PipeTransform {

  transform(value: string): string {
    var splitted = value.split("-"); 
    console.log(splitted[0])
    return splitted[0];
  }

}
