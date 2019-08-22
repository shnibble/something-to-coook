import React from 'react'
import styled from 'styled-components'
import device from '../../util/device'
import Banner from './banner'

const Container = styled.header`
    position: relative;
    flex-basis: 200px;
    flex-grow: 0;
    flex-shrink: 0;
    background: rgba(0,0,0,0.5);

    ${device.tablet`
        display: none;
    `}
`
const Title = styled.h1`
    color: #f88000;
    font-size: 72px;
    margin: 0 10px;
    padding: 0;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
`
const Subtitle = styled.p`
    color: #fff;
    font-size: 22px;
    margin: 0 20px;
    padding: 0;
    font-family: Tahoma, Geneva, sans-serif;
    font-weight: normal;
`

const possibleSubtitles = [
    `What's for dinner?`,
    `Need some inspiration for your next meal?`,
    `Whittle it down to your favorite cuisines and pick something already!`,
    `Sometimes you just need a little help deciding.`,
    `I can never decide, can you?`,
    `Having a party?`,
    `Let's make something delicious!`,
    `So many choices, who else would you decide?`
]
const randomSubtitle = () => {
    const index = Math.floor(Math.random() * possibleSubtitles.length)
    return possibleSubtitles[index]
}

const Header = () => <Container><Banner /><Title>Something to Cook</Title><Subtitle>{randomSubtitle()}</Subtitle></Container>

export default Header
