import React from 'react';
import style from './pokemon-list.module.css'
import {PokemonItem} from "./PokemonItem";

export const PokemonList = ({pokemon, infoPokemon, main, handleLoad}) => {

    return (
        <main className={!main ? style.main : style.main_info}>
            <ul className={style.pokemon_list}>
                {pokemon.map((item) =>
                    <li key={item.id} onClick={() => infoPokemon(item)} className={style.pokemon}>
                        <PokemonItem img={item.sprites.front_default} name={item.name} types={item.types} />
                    </li>
                )}
            </ul>

            <button onClick={handleLoad} className={style.load_more_button}>Load More</button>
        </main>
    );
};


