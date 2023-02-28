import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
    product: IProduct
}
export function Product({product}: ProductProps) {

    const [details, setDetails] =  useState(false)
    const btnBgClasses = details ? 'bg-green-400' : 'bg-yellow-400';
    const btnClasses = ['px-2 py-2 border', btnBgClasses]

    return(
        <div className='border py-4 px-4 rounded flex flex-col items-center mb-2'>Product
        <img src={product.image} className="w-1/6" alt={product.title}></img>
        <p>{product.title}</p>
        <p className="font-bold">{product.price}</p>
        <button className={btnClasses.join(' ')}
        onClick={() => setDetails(prev => !prev)}
        > {!details ? 'Show details' : 'Hide details'}
        </button>

        {details &&<div>
            <p>{product.description}</p>
            <p><span style={{fontWeight : 'bold'}}>Rate: {product.rating.rate}</span></p>
        </div>}
        </div>
    )
}