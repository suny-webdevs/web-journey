/* eslint-disable react/prop-types */
export default function Book({book}) {
    const {name, price} = book
    const bookStyle = {
        border: '2px solid tomato',
        borderRadius: '10px',
        margin: '10px 0'
    }
    return (
        <div style={bookStyle}>
            <h2>Name: {name}</h2>
            <h3>Price: {price}</h3>
        </div>
    )
}