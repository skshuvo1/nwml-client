import React, { useEffect, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';
import Marquee from "react-fast-marquee";
import Footer from '../../Shared/Footer/Footer';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error.message))
    }, [])
    return (
        <div className='w-full'>
            <h2 className='font-bold text-center text-2xl my-8 py-3'>Our <span className='text-red-500'> Products</span></h2>

            <Marquee className='mb-8' direction='right' speed={30}>
                <div className='flex mx-auto justify-center '>
               
                    {
                        products.map(product => <AllProduct key={product.id} product={product}></AllProduct>)
                    }
                </div> 

            </Marquee>
<div>
    <Footer></Footer>
</div>
        </div>
    );
};

export default Products;