import { Component, signal } from '@angular/core';
import { POKEMON_LIST } from './pokemon-list.fake';
import { Pokemon } from './pokemon.model';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  readonly pokemonList = signal(POKEMON_LIST);

  /* On utilise ensuite l'interface Pokémon pour forcer
le type du paramètre pokémon avec la syntaxe "parameter : Type". */
size(pokemon: Pokemon) {
  if (pokemon.life <= 15) {
    return 'Petit';
  }
  if (pokemon.life >= 25) {
    return 'Grand';
  }

  return 'Moyen';
}

incrementLife(pokemon: Pokemon){
  pokemon.life = pokemon.life + 1;
}
decrementLife(pokemon: Pokemon){
  pokemon.life = pokemon.life - 1;
}
}