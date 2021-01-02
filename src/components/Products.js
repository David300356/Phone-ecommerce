import React, { Component } from 'react'
import { ProductConsumer } from "../context";
import Title from './Title';
import Product from './Product'


export default class Products extends Component {
    render() {
        return (
            <>
        <div className="container">
            <Title title="Our Products"/>
            <div className="row">
              
               <ProductConsumer>
                {(value)=>{
                   return value.products.map(product=>{
                       return <Product key={product.id} product={product}/>;
                   })
                }}
            </ProductConsumer> 
            </div>
        </div>
           </> 
        )
    }
}
