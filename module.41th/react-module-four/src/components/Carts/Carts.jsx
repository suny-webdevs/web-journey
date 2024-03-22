/* eslint-disable react/prop-types */
import './Cart.css'

const Carts = ({carts}) => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Cart <small className='batch'>{carts.length}</small></h2>
            <div className='cart-container'>
                {
                    carts.map(({title, image, price, id}) => <div className='card-product-item' key={id}>
                        <div className='title-img-container'>
                            <img className='cart-product-image' src={image} alt={title} />
                            <p> {title.slice(0, 11)} </p>
                        </div>
                        <p> {price} BDT</p>
                    </div>)
                }
            </div>
        </div>
    );
}

export default Carts;
