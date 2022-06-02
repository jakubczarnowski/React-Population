import React from 'react'
import CountryPopulation from './CountryPopulation'

interface Country{
    name: string,
    capital: string,
    currencies: {
        code: string,
        name: string,
        symbol: string,
    }[]
    flag: string,
    independent: boolean,
    population: number
}

interface Props {
    items: Country[]
}

const PopulationStats: React.FC<Props> = ({items}) => {
    const WORLD_POPULATION = 7_754_000_000;
    const stats = items.sort((a,b) => b.population - a.population).slice(0,11);
  return (
    <div className='population-stats'>
        <CountryPopulation item={{name: "World", width:"99%", population: WORLD_POPULATION}}/>
        {stats.map((item,i)=>{
            return <CountryPopulation item = {{name: item.name, width: (item.population/WORLD_POPULATION * 100).toString() + "%", population: item.population}}/>
        })}
    </div>
  )
}

export default PopulationStats