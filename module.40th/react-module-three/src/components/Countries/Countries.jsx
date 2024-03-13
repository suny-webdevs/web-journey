import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [counties, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    const visitedCountry = country => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const listStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    }
    const listImageStyle = {
        width: '25px',
        height: '20px',
        borderRadius: '3px'
    }

    return (
        <div>
            <h2>Visited Countries ({visitedCountries.length})</h2>
            <ol>
                {
                    visitedCountries.map(({name, flags}, index) => 
                        <li style={listStyle} key={index}> 
                            <img style={listImageStyle} src={flags.svg} alt={flags.alt} />
                            <span>{name.common}</span>
                        </li>
                    )
                }
            </ol>
            <h2>Countries: {counties.length} </h2>
            <div className="countries">
                {
                    counties.map(country => 
                        <Country 
                            key={country.cca2} 
                            country={country} 
                            visitedCountry={visitedCountry}
                        />)
                }
            </div>
        </div>
    );
}

export default Countries;