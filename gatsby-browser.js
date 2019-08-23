import React from 'react'
import WebfontLoader from '@dr-kobros/react-webfont-loader'
import { SelectionsProvider } from './src/components/contexts/selections'

require('typeface-amatic-sc')
require('typeface-montserrat')

const config = {
    custom: {
        families: ['Amatic SC', 'Montserrat']
    }
}

export const wrapRootElement = ({ element }) => (
    <WebfontLoader config={config}>
        <SelectionsProvider>
            {element}
        </SelectionsProvider>
    </WebfontLoader>
)
