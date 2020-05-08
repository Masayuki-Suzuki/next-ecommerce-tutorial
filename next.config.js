require('dotenv').config()
const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withTypescript(
    withSass({
        webpack(config, options) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '~': './src'
            }

            if (options.isServer) {
                config.plugins.push(new ForkTsCheckerWebpackPlugin())
            }

            return config
        },
        env: {
            SNIPCART_API_KEY: process.env.SNIPCART_API_KEY
        }
    })
)
