import React from 'react';
import ProductItem from './ProductItem'




export default function Products(props) {


   
        // console.log(props)
        return (
            <div>
                {props.data.map(item=> <ProductItem key={item.id}  data={item}/>)}
            </div>
        )
    
}
