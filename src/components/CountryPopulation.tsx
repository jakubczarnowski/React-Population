import React from 'react'

interface Props {
    item: {
        name: string,
        width: string,
        population: number,
    }
}

const CountryPopulation: React.FC<Props> = ({item}) => {
function humanize(num: number, digits: number) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "k" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "B" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function(item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}
  return (
    <div className='population-single'>
        <h2>{item.name} ({ humanize(item.population, 2)})</h2>
        <div className="population-stick" style={{width: item.width}}></div>
    </div>
  )
}

export default CountryPopulation