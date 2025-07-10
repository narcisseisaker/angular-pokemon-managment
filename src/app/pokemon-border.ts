import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appPokemonBorder]'
})
export class PokemonBorder {
  pokemonType = input.required <string>(); //propriété d'entrée du pokémon qui requiert une string
  private initialColor: string; //couleur initiale de la bordure de la carte

  constructor(private el: ElementRef){
     this.initialColor = this.el.nativeElement.style.borderColor;
     this.el.nativeElement.style.borderWidth = '2px';
  }
 //Détection lorsque le curseur entre sur un élément de la liste
  @HostListener('mouseenter') onMouseEnter(){
    const color = this.getBorderColor();
    this.setBorder(color);
  }
  //Détection lorsque le curseur sort d'un élément de la liste
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor)
  }
 
 private setBorder(color: string){
  this.el.nativeElement.style.borderColor = color;
  
 }
  private getBorderColor() {
    switch (this.pokemonType()) {
      case 'Feu':
        return '#EF5350';
      case 'Eau':
        return '#42A5F5';
      case 'Plante':
        return '#66BB6A';
      case 'Insecte':
        return '#8d6e63';
      case 'Vol':
        return '#90CAF9';
      case 'Poison':
        return '#b388ff';
      case 'Fée':
        return '#f8bbd0';
      case 'Electrik':
        return '#f4ff81';
      default:
        return '#303030';
    }
  }

}
