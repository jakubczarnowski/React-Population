import React from 'react'

interface Props {
    item: {
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
}

const CountryCard: React.FC<Props> = ({item}) => {
    var currency;
    if(item.currencies){
        currency = `Currency: ${item.currencies[0].name} (${item.currencies[0].code})`;
    }else{
        currency = 'Currency: -';
    }
  return (
    <div className="card">
        <div className="card__cover">
            <img src={item.flag}/>
        </div>
        <div className="card__content">
            <h1>{item.name}</h1>
            <h3>Capital: {item.capital} </h3>
            <h3>Population: {item.population}</h3>
            <h3>{currency}</h3>
        </div>
    </div>
  )
}

export default CountryCard