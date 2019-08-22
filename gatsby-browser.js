import React from 'react'
import WebfontLoader from '@dr-kobros/react-webfont-loader'

require('typeface-amatic-sc')

const config = {
    custom: {
        families: ['Amatic SC']
    }
}

export const wrapRootElement = ({ element }) => (
    <WebfontLoader config={config}>
        {element}
    </WebfontLoader>
)