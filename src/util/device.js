import { css } from 'styled-components'

const ScreenSizes = {
    TABLET: 1024,
    MOBILE: 768
}
const sizes = {
    tablet: ScreenSizes.TABLET,
    mobile: ScreenSizes.MOBILE
}
const device = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (max-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
    `
    return acc
}, {})

export default device
