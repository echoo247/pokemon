import React from 'react';
import style from './pokemon-info.module.css'


export const PokemonInfo = ({pokemon, onClose}) => {

    return (
        <div onClick={() => onClose()} className={style.detail_container}>
            <div className={style.pokemon_card}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className={style.pokemon_image}/>
                <div className={style.pokemon_details}>
                    <h3 className={style.pokemon_name}>{pokemon.name} <i><b>#</b></i>{pokemon.id}</h3>
                    <table className={style.details_table}>
                        <tbody>
                        <tr>
                            <th>Type</th>
                            <td>{pokemon.types[0].type.name}</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <th>Attack</th>
                            <td>{pokemon.stats[0].base_stat
                            }</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <th>Defence</th>
                            <td>{pokemon.stats[1].base_stat
                            }</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <th>HP</th>
                            <td>{pokemon.stats[2].base_stat
                            }</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <th>SP Attack</th>
                            <td>{pokemon.stats[3].base_stat
                            }</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <th>SP Defence</th>
                            <td>{pokemon.stats[4].base_stat
                            }</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <th>Speed</th>
                            <td>{pokemon.stats[5].base_stat
                            }</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <th>Weight</th>
                            <td>{pokemon.weight}</td>
                        </tr>
                        </tbody>
                        <tbody>
                        <tr>
                            <th>Total moves</th>
                            <td>{pokemon.moves.length}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

