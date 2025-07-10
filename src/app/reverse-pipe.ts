import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join(''); /* la méthode transform
     prend une chaîne de caractères 
    en entrée, la divise en un tableau de caractères,
     inverse l'ordre des caractères, puis rejoint les
      caractères pour reformer une
     chaîne inversée. */
  }

}
