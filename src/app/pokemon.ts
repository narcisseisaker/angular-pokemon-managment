import { Injectable } from '@angular/core';
import { Pokemon, PokemonList } from './pokemon.model';
import { POKEMON_LIST } from './pokemon-list.fake';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

//Retourne la liste de tous les pokémons
  getPokemonList(): PokemonList { 
    return POKEMON_LIST;
  }

  //Retourne le pokemon avec l'identifiant passé en paramètre
  getPokemonById(id: number): Pokemon{
    const pokemon = POKEMON_LIST.find((pokemon) => pokemon.id === id);
    if(!pokemon){
      throw new Error(`No Pokémon found with id ${id}`);
    }
    return pokemon;
  }
    // Retourne la liste des types valides pour un pokémon.

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
    ];
  }



}
