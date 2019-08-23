import React from 'react'
// import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
// import theme from 'styled-theming'
import device from '../util/device'
import Header from '../components/header/header'
import Results from '../components/results/results'
import PrepTime from '../components/prepTime/prepTime'
import Categories from '../components/categories/categories'
import Tags from '../components/tags/tags'
import '../util/style.global.css'


// const padding = theme('layout', {
//     compact: '5px',
//     cozy: '15px'
// })
// const backgroundColor = theme('mode', {
//     light: '#fafafa',
//     dark: '#222'
// })
// const textColor = theme('mode', {
//     light: '#000',
//     dark: '#fff'
// })
// const buttonBackgroundColor = theme('mode', {
//     light: 'lightgreen',
//     dark: 'darkgreen'
// })
// const buttonFontSize = theme.variants('layout', 'size', {
//     small: { compact: '12px', cozy: '14px' },
//     medium: { compact: '14px', cozy: '16px' },
//     large: { compact: '18px', cozy: '20px' }
// })
// const ScreenSizes = {
//     TABLET: 1024,
//     MOBILE: 768
// }
// const sizes = {
//     tablet: ScreenSizes.TABLET,
//     mobile: ScreenSizes.MOBILE
// }
// const device = Object.keys(sizes).reduce((acc, label) => {
//     acc[label] = (...args) => css`
//         @media (max-width: ${sizes[label] / 16}em) {
//             ${css(...args)}
//         }
//     `
//     return acc
// }, {})

// const orientations = {
//     portrait: 'portrait',
//     landscape: 'landscape'
// }

// const orientation = Object.keys(orientations).reduce((acc, label) => {
//     acc[label] = (...args) => css`
//         @media (orientation: ${orientations[label]}) {
//             ${css(...args)}
//         }
//     `
//     return acc
// }, {})


// const Button = styled.button`
//     background-color: ${buttonBackgroundColor};
//     padding: ${padding};
//     font-size: ${buttonFontSize};
//     border: none;
// `
// Button.propTypes = {
//     size: PropTypes.oneOf(['small', 'medium', 'large'])
// }
// Button.defaultProps = {
//     size: 'medium',
//     theme: {
//         main: {
//             color: 'white'
//         }
//     }
// }


const Wrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`
const Content = styled.main`
    flex-grow: 1;
    max-width: 1600px;
    margin: auto;
    padding: 20px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: minmax(250px, 2fr) auto auto;
    grid-gap: 20px;
    transition: all .25s ease;

    ${device.mobile`
        grid-template-columns: 1fr;
        grid-template-rows: minmax(320px, 1fr) auto auto auto;
        grid-gap: 5px;
        padding: 1px;
    `}
`

const pageTheme = {
    mode: 'light'
}

class IndexPage extends React.Component {
    
    render() {
        return (
            <ThemeProvider theme={pageTheme}>
                <Wrapper>
                    <Header />
                    <Content>
                        <Results />
                        <PrepTime />
                        <Categories />
                        <Tags />
                    </Content>
                </Wrapper>
            </ThemeProvider>
        )
    }   
}

export default IndexPage
