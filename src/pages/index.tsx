import React from 'react'
import Head from 'next/head'
import Header from '~/components/header'
import ProductList from '~/components/product-list'
import { TProduct } from '~/components/product'
import Footer from '~/components/footer'
import '../styles/styles.scss'

type IndexProps = {
    products: TProduct[]
}

const Index = ({products}) => {
    return (
        <div className="app">
            <Head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
                <script
                    src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
                    data-api-key={process.env.SNIPCART_API_KEY}
                    id="snipcart">
                </script>
                <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>
            <Header/>
            <main className="main">
                <img src="/static/aquarium.svg" alt="a" className="background-image" />
                <div className="promotional-message">
                    <h3>REDISCOVER</h3>
                    <h2>Fishkeeping</h2>
                    <p>An <strong>exclusive collection of bettas</strong> available for everyone.</p>
                </div>
                <ProductList products={products}/>
            </main>
            <Footer/>
        </div>
    )
}

Index.getInitialProps = async ({req}) => {
    return {
        products: [
            {
                id: 'nextjs_halfmoon',
                name:'Halfmoon Betta',
                price: 25.00,
                image: '../static/halfmoon.jpg',
                description: 'The Halfmoon betta is arguably one of the prettiest betta species. ' +
                    'It is recognized by its large tail that can flare up to 180 degrees.'
            },
            {
                id: 'nextjs_halfmoon',
                name:'Halfmoon Betta',
                price: 25.00,
                image: '../static/halfmoon.jpg',
                description: 'The Halfmoon betta is arguably one of the prettiest betta species. ' +
                    'It is recognized by its large tail that can flare up to 180 degrees.'
            },
            {
                id: 'nextjs_halfmoon',
                name:'Halfmoon Betta',
                price: 25.00,
                image: '../static/halfmoon.jpg',
                description: 'The Halfmoon betta is arguably one of the prettiest betta species. ' +
                    'It is recognized by its large tail that can flare up to 180 degrees.'
            },
            {
                id: 'nextjs_halfmoon',
                name:'Halfmoon Betta',
                price: 25.00,
                image: '../static/halfmoon.jpg',
                description: 'The Halfmoon betta is arguably one of the prettiest betta species. ' +
                    'It is recognized by its large tail that can flare up to 180 degrees.'
            }
        ] as TProduct[]
    }
}

export default Index
