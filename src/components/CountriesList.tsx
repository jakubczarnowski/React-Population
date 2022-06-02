import React, { useState, useEffect, ReactElement } from 'react';
import CountryCard from './CountryCard';

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
    data: {
        items: Country[],
        error: any,
        isLoaded: boolean
    }
}

const CountriesList: React.FC<Props> = ({data}) => {

    if (data.error) {
      return <div>Error: </div>;
    }
    if (!data.isLoaded) {
      return <div>Loading...</div>;
    }
    const countries: ReactElement<any, any>[] = data.items.map((item: Country,i) => {
        return <CountryCard item={item} key={i}/>
    })
    return (
    <div className="container">
        {countries}
    </div>
    );
}


export default CountriesList