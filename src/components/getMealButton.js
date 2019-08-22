import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
    margin: 5px;
    padding: 5px 30px;
    background: #33cc33;
    border-radius: 15px;
    box-shadow: 0 0 5px 2px rgba(0,0,0,0.5);
    border: none;
    color: #fff;
    font-size: 50px;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    cursor: pointer;
    z-index: 5;
    transition: all .25s ease;

    &:focus {
        outline: none;
        transform: scale(1.01);
    }

    &:hover {
        background: #29a329;
        transform: scale(1.1);
    }
`

const GetMealButton = () => <Container>GET MEAL</Container>

export default GetMealButton
