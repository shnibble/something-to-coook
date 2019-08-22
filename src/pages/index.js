import React from 'react'
// import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
// import theme from 'styled-theming'
import device from '../util/device'
import Header from '../components/header/header'
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
    width: 100%;
    max-width: 1600px;
    box-sizing: border-box;
    margin: auto;
    padding: 20px;
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-template-rows: minmax(250px, 2fr) auto auto;
    grid-gap: 20px;
    transition: all .25s ease;

    ${device.mobile`
        grid-template-columns: 1fr;
        grid-template-rows: minmax(250px, 1fr) auto auto auto;
        grid-gap: 5px;
        padding: 1px;
    `}
`
const Results = styled.section`
    border: 3px solid lightblue;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
`
const ResultsPager = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    ${device.tablet`
        bottom: 40px;
    `}
`
const ResultsPagerButtonLeft = styled.button`
    position: relative;
    width: 40px;
    height: 80px;
    border: none;
    background: none;
    cursor: pointer;
    opacity: 0.5;
    transition: all .25s ease;

    &:focus {
        outline: none;
        opacity: 0.6;
    }

    &:hover {
        opacity: 1;
    }

    & > div {
        position: absolute;
        top: 0;
        left: 5px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 40px 30px 40px 0;
        border-color: transparent #f88000 transparent transparent;
    }
`
const ResultsPagerButtonRight = styled.button`
    position: relative;
    width: 40px;
    height: 80px;
    border: none;
    background: none;
    cursor: pointer;
    opacity: 0.5;
    transition: all .25s ease;

    &:focus {
        outline: none;
        opacity: 0.6;
    }

    &:hover {
        opacity: 1;
    }

    & > div {
        position: absolute;
        top: 0;
        left: 5px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 40px 0 40px 30px;
        border-color: transparent transparent transparent #f88000;
    }
`
const ResultsPagerResultContainer = styled.div`
    flex-grow: 1;
    position: relative;
    height: 100%;

    border: 1px dotted red;
    text-align: center;
`
const ResultsPagerResult = styled.div`
    position: absolute;
    left: 50%;
    margin-left: -40%;
    width: 80%;
    height: 100%;

    ${device.mobile`
        left: 0;
        width: 100%;
        margin: 0;
    `}

    background: blue;
`
const GetMealButton = styled.button`
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 40px;
    width: 100%;

    ${device.tablet`
        display: block;
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
                        <Results>
                            <ResultsPager>
                                <ResultsPagerButtonLeft><div/></ResultsPagerButtonLeft>
                                <ResultsPagerResultContainer>
                                    <ResultsPagerResult>
                                        <h3>A Nice Meal</h3>
                                        <p>Something good about the nice meal...</p>
                                    </ResultsPagerResult>
                                </ResultsPagerResultContainer>
                                <ResultsPagerButtonRight><div/></ResultsPagerButtonRight>
                            </ResultsPager>
                            <GetMealButton>GET MEAL</GetMealButton>
                        </Results>
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
