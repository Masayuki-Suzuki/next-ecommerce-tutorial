import React from 'react'
import { Router, withRouter } from 'next/router'

export type TProduct = {
    id: string
    name: string
    price: number
    url: string
    description: string
    image: string
}

type ProductProps = {
    product: TProduct
    router: Router
}

const Product = ({ product, router }: ProductProps) => {
    return (
        <div className="product">
            <h2 className="product__title">{product.name}</h2>
            <p className="product__description">{product.description}</p>
            <img src={product.image} alt="" className="product__image"/>
            <div className="product__price-button-container">
                <div className="product__price">${product.price.toFixed(2)}</div>
                <button
                    className="snipcart-add-item product__button"
                    data-item-id={product.id}
                    data-item-name={product.name}
                    data-item-price={product.price}
                    data-item-url={router.pathname}
                    data-item-image={product.image}
                >
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default withRouter(Product)
