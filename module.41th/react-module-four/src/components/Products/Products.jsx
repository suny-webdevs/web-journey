import { useEffect, useState } from "react";
import Product from "../Product/Product";
import './Products.css'
import Carts from "../Carts/Carts";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const [carts, setCarts] = useState([])

    const handleAddToCart = product => {
        const newCart = [...carts, product]
        setCarts(newCart)
    }

    return (
        <div>
            <Carts carts={carts} />
            <h2 style={{textAlign: 'center'}}>Products <small className="batch">{products.length}</small> </h2>
            <div className="container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />)
                }
            </div>
        </div>
    );
}

export default Products;
