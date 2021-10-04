import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { Card } from 'semantic-ui-react'
import Product from './Product'

function ProductList() {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1000px)",
      });
      const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
      
    return (
        <Card.Group style={{marginTop:"3em"}} itemsPerRow={isDesktop&&4 || isMobile&& 1}>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
        </Card.Group>
    )
}

export default ProductList
