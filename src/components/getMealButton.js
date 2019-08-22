import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Selections from './contexts/selections'

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

class GetMealButton extends React.Component {
    getMeal = () => {
        const prepTime = this.context.prepTime
        let time = null
        if (prepTime) {
            time = prepTime
        }
        const categories = this.context.categories.map(category => category.name)
        const tags = this.context.tags.map(tag => tag.name)

        axios.get('https://api.somethingtocook.com/meals', {
            params: {
                categories,
                time,
                tags,
                limit: 1,
                order: 'RANDOM'
            }
        })
        .then(result => {
            this.context.addMealHandler(result.data[1])
        })
        .catch(error => {
            alert(`Oops! Something went wrong. Sorry about that :(\n${error}`)
        })
    }

    render() {
        return (
            <Container onClick={this.getMeal}>GET MEAL</Container>
        )
    }
}
GetMealButton.contextType = Selections

export default GetMealButton
