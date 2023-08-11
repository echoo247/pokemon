import React from 'react';
import style from './pokemon-filter.module.css'
import {colorTypes} from "../utils";

export const PokemonFilter = ({selectedType, onTypeChange}) => {
    const types = ['Normal', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic',
        'Rock', 'Ground', 'Fighting', 'Flying', 'Poison', 'Bug',
        'Ghost', 'Steel', 'Ice', 'Dragon', 'Dark', 'Fairy'];
    return (
        <div>
            <label>Filter by Type:</label>
            <select value={selectedType} onChange={onTypeChange}>
                <option style={{backgroundColor: '#44685E'}} value="all">All</option>
                {types.map((type) => (
                    <option style={{backgroundColor: colorTypes[`${type.toLowerCase()}`]}} key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
        </div>
    );
};

