/* eslint-disable react/prop-types */
import Counter from '../Counter/Counter';
import './Product.css'

const Product = ({product, handleAddToCart}) => {
    const {image, title, description, price} = product
    return (
        <div className='card-container'>
           <div>
                <img src={image} alt="" />
                <h2> {title} </h2>
                <p> {description} </p>
                <h3> Price: {price} BDT </h3>
                <div style={{margin: '10px 0'}}>
                    <p>Quantity: </p>
                    <Counter />
                </div>
           </div>
            <div>
                <button style={{marginRight: '10px'}}>Buy now</button>
                <button onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
        </div>
    );
}

export default Product;
