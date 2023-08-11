import './App.css';
import {PokemonList} from "./components/PokemonList";
import axios from "axios";
import React, {useEffect, useState} from "react";
import {useFetching} from "./hooks/useFetching";
import {PokemonInfo} from "./components/PokemonInfo";
import {isEqual} from 'lodash'
import {PokemonFilter} from "./components/PokemonFilter";

function App() {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([])
    const [limit, setLimit] = useState(12)
    const [offset, setOffset] = useState(0)
    const [pokemon, setPokemon] = useState();
    const [selectedType, setSelectedType] = useState(null);

    const [fetchData, isPokeLoading, pokeError] = useFetching(async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon`,
            { params: { offset: offset, limit: limit } });
        response.data.results?.map(async(item)=>{
            const res = await axios.get(item.url)
            setData(state => [...state, res.data])
            setFilterData(state => [...state, res.data])
        })
    })

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
        if(event.target.value === 'all') {
            setFilterData(data)
            return;
        }
        if(selectedType && selectedType.toLowerCase() === event.target.value.toLowerCase())
            return;
        const filter = data.filter(value => value.types[0].type.name === event.target.value.toLowerCase())

        setFilterData(filter)
    };

    const handleLoad = () => {
        setOffset(offset + 12)
    }

    const handleInfo = (item) => {
        const checkPokemon = isEqual(pokemon, item)
        if(checkPokemon){
            return setPokemon(null)
        }
        setPokemon(item)
    }

    const handleClose = () => {
        setPokemon(null)
    }

    useEffect( () => {
        fetchData()
    },[offset])

  return (
    <div className="container">
        <div className='header'>
          <h1>Pokedex</h1>
      </div>
        <PokemonFilter onTypeChange={handleTypeChange}/>
        {pokeError && <h1>Error ${pokeError}</h1>}
        <div className={pokemon && "update_wrapper"}>
            {filterData.length > 0 ?
                <PokemonList handleLoad={handleLoad} main={pokemon} pokemon={filterData} infoPokemon={(item) => handleInfo(item)}/>
                : <h1>Not found {selectedType}</h1>
            }

            {isPokeLoading && <h1>Loading...</h1>}
        </div>
        {pokemon && <PokemonInfo onClose={handleClose} pokemon={pokemon}/>}
    </div>
  );
}

export default App;
