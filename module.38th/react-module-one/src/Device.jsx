/* eslint-disable react/prop-types */
import './App.css'

export default function Device({ type, name, price, brand, currency }) {
    return (
        <div className='device'>
            <p>{brand} {name} {type}. Price: {price} {currency}</p>
        </div>
    )
}