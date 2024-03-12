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

    return (
        <div>
            <h2>Visited Countries ({visitedCountries.length})</h2>
            <ol>
                {
                    visitedCountries.map(country => <li style={{display: 'flex', alignItems: 'center', gap: '10px'}} key={country.cca3}> <img style={{width: '25px', height: '20px', borderRadius: '3px'}} src={country.flags.png} alt={country.flags.alt} /> <span>{country.name.common}</span></li>)
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