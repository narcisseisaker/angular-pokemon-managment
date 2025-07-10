import { Component, computed, inject, signal } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { PokemonBorder } from './pokemon-border';
import { DatePipe } from '@angular/common';
import { PokemonService } from './pokemon';
@Component({
  selector: 'app-root',
  imports: [DatePipe, PokemonBorder],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  /*On injecte le service PokemonService dans ce composant/
  readonly empeche au composant de modifier le service
  private permet de s'assurer que le service n'est que disponible
  dans la classe du composant.
  */
 readonly searchTerm = signal('');
  private readonly pokemonService = inject(PokemonService);
  readonly pokemonList = signal(this.pokemonService.getPokemonList());
  readonly pokemonListFiltered = computed(() => {
    return this.pokemonList().filter((pokemon) =>
         pokemon.name
        .toLowerCase()
        .includes(this.searchTerm().trim().toLowerCase())
    );
  });  
 

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