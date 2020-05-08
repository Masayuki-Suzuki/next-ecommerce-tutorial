import React from 'react'
import Product, { TProduct } from '~/components/product'

type ProductListProps = {
    products: TProduct[]
}

const ProductList = ({products}: ProductListProps) => {
    return (
        <div className="product-list">
            {products.map((product, index) => <Product product={product} key={index}/>)}
        </div>
    )
}

export default ProductList
