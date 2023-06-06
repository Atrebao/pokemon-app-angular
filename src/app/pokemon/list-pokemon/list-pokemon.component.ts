import { Component, OnInit } from '@angular/core';

import { Pokemon } from '../pokemon';
import { Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent{
  pokemonList: Pokemon[]=POKEMONS;
  pokemonSelected  :Pokemon  | undefined;
  title = 'ng-pokemon-app';

  constructor(private router:Router){}

  selectPokemon(pokemonId:Pokemon){

    const pokemon:Pokemon | undefined= this.pokemonList.find(pokemon => pokemon.id==+pokemonId);

    if(pokemonId){
      console.log(`Vous avez demandé le pokemon ${pokemonId.name}`);
      this.pokemonSelected = pokemon;
    }
    else{
      console.log(`Vous avez cliqué sur un pokemon qui n'existe pas`);
    }
  }

  gotToPokemon(pokemon:Pokemon){
    this.router.navigate(['/pokemon', pokemon.id])
  }
}
