import React from 'react'
import WebfontLoader from '@dr-kobros/react-webfont-loader'
import { SelectionsProvider } from './src/components/contexts/selections'

require('typeface-amatic-sc')

const config = {
    custom: {
        families: ['Amatic SC']
    }
}

export const wrapRootElement = ({ element }) => (
    <WebfontLoader config={config}>
        <SelectionsProvider>
            {element}
        </SelectionsProvider>
    </WebfontLoader>
)
