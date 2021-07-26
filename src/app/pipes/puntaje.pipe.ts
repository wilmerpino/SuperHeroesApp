import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'puntaje'
})
export class PuntajePipe implements PipeTransform {

  transform(puntaje: any): String {
    return (puntaje == 'null')? ' - ' : puntaje;
  }

}
