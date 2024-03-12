/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Country.css'

const Country = ({country, visitedCountry}) => {
    const {name, flags, population, area, cca3} = country

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(true)
    }
    return (
        <div className="country">
            <div>
                <img src={flags.png} alt={flags.alt} />
                <h3>{name?.common} </h3>
                <p>Population: {population} </p>
                <p>Area: {area} </p>
                <p>Code: <small style={{backgroundColor: 'white', color: '#242424', fontWeight: 'bold', padding: '0 5px', borderRadius: '5px'}}>{cca3}</small> </p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <button 
                    style={visited ? {color: 'white', backgroundColor: 'green'} : {color: 'red'}} 
                    onClick={() => {handleVisited(); visitedCountry(country)}} disabled={visited}>
                        {visited ? 'Visited' : 'Not Visited'}
                </button>
            </div>
        </div>
    );
}

export default Country;