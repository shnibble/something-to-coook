import React from 'react'
import styled from 'styled-components'
import device from '../../util/device'
import Banner from './banner'
import GetMealButton from '../getMealButton'

const Container = styled.header`
    position: relative;
    flex-basis: 200px;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    background: rgba(0,0,0,0.65);

    ${device.tablet`
        display: none;
    `}
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`
const ButtonContainer = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
    align-self: center;
`
const Author = styled.div`
    flex-grow: 1;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 10px;
`
const AuthorText = styled.span`
    font-size: 16px;
    color: #b3b3b3;
    margin-right: 5px;
`
const AuthorLink = styled.a`
    font-size: 16px;
    color: #b3b3b3;
    transition: all .25s ease;

    &:focus {
        outline: none;
        color: #ccc;
    }

    &:hover {
        color: #fff;
    }
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

const Header = () => {
    return (
        <Container>
            <Banner />
            <TitleContainer>
                <Title>Something to Cook</Title>
                <Subtitle>{randomSubtitle()}</Subtitle>
                <Author><AuthorText>By:</AuthorText> <AuthorLink href='https://burntoaststudio.com/'>Burn Toast Studio</AuthorLink></Author>
            </TitleContainer>
            <ButtonContainer>
                <GetMealButton />
            </ButtonContainer>
        </Container>
    )
}

export default Header
