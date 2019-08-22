import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import device from '../../util/device'
import Selections from '../contexts/selections'

const Container = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-column-start: 1;
    grid-column-end: 3;
    border-top: 1px solid #f2f2f2;
    padding-top: 5px;
`
const Title = styled.h2`
    font-size: 18px;
`
const ButtonContainer = styled.div`
    align-self: center;
`
const Button = styled.button`
    border: none;
    white-space: nowrap;
    font-size: 22px;
    line-height: 24px;
    font-weight: bold;
    margin: 5px;
    padding: 5px 15px;
    border-radius: 15px;
    background: rgb(242,242,242);
    background: radial-gradient(circle, rgba(242,242,242,1) 0%, rgba(204,204,204,1) 100%);
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.3);
    cursor: pointer;
    font-family: 'Amatic SC', cursive;
    transition: all .25s ease;
    
    ${device.tablet`
        padding: 10px;
    `}
    
    ${device.mobile`
        padding: 15px 5px;
    `}

    &:focus {
        outline: none;
        opacity: 0.85;
    }
    &:hover {
        opacity: 0.75;
    }

    &.active {
        background: rgb(255,156,51);
        background: radial-gradient(circle, rgba(255,156,51,1) 0%, rgba(248,128,0,1) 100%);

        & > div {
            opacity: 1;
        }
    }
`
const ButtonIcon = styled.div`
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    margin-top: 2px;
    margin-left: 5px;
    vertical-align: top;
    box-shadow: 0 0 0 2px #008000;
    opacity: 0;
    transition: all .25s ease;

    & > div:nth-child(1) {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        & > div {
            position: absolute;
            height: 4px;
            background: #008000;

            &:nth-child(1) {
                transform: rotate(35deg);
                width: 6px;
                left: 2px;
                top: 10px;
            }
            &:nth-child(2) {
                transform: rotate(-55deg);
                width: 14px;
                left: 4px;
                top: 8px;
            }
        }
    }
`

const Categories = () => {
    const { allStcCategories: { edges } } = useStaticQuery(
        graphql`
        query {
            allStcCategories {
                edges {
                    node {
                        id
                        alternative_id
                        name
                    }
                }
            }
        }
        `
    )

    return (
        <Container>
            <Title>Categories</Title>
            <ButtonContainer>
                <Selections.Consumer>
                    {(context) => 
                        edges.map(({ node }) => (node.alternative_id)
                        ?
                        <Button 
                            key={node.id} 
                            id={node.id} 
                            value={node.alternative_id} 
                            data-name={node.name}
                            onClick={context.toggleCategoryHandler.bind(this, node.alternative_id, node.name)}
                            className={(context.isCategoryActive(node.alternative_id)?'active':null)}
                        >
                            {node.name}
                            <ButtonIcon htmlFor={node.id}>
                                <div>
                                    <div/>
                                    <div/>
                                </div>
                            </ButtonIcon>
                        </Button>
                        :
                        null
                        )
                    }
                </Selections.Consumer>
            </ButtonContainer>
        </Container>
    )
}

export default Categories
