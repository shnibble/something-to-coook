import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import device from '../../util/device'
import Selections from '../contexts/selections'

const Container = styled.section`
    display: flex;
    grid-row-start: 1;
    grid-row-end: 2;
    flex-direction: column;
    border-top: 1px solid #f2f2f2;
    padding-top: 5px;

    ${device.mobile`
        grid-row-start: 2;
        grid-row-end: 3;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
    `}
`
const Title = styled.h2`
    font-size: 18px;
    padding: 5px;
`
const Radio = styled.input`
    display: none;

    &:checked + label {
        background: rgb(255,156,51);
        background: radial-gradient(circle, rgba(255,156,51,1) 0%, rgba(248,128,0,1) 100%);
    }
`
const RadioLabel = styled.label`
    margin: 5px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgb(242,242,242);
    background: radial-gradient(circle, rgba(242,242,242,1) 0%, rgba(204,204,204,1) 100%);
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.3);
    cursor: pointer;
    font-size: 22px;
    line-height: 25px;
    font-family: 'Amatic SC', cursive;
    font-weight: bold;
    transition: all .25s ease;
    
    ${device.tablet`
        padding: 5px 15px;
    `}
    
    ${device.mobile`
        padding: 5px 10px;
    `}

    &:hover {
        opacity: 0.75;
    }
`

const PrepTime = () => {
    const { allStcPreptimes: { edges } } = useStaticQuery(
        graphql`
        query MyQuery {
            allStcPreptimes {
                edges {
                    node {
                        id
                        alternative_id
                        value
                    }
                }
            }
        }
        `
    )

    return (
        <Container>
            <Title>Prep Time</Title>
            <Selections.Consumer>
                {(context) => 
                    <>
                        
                        <Radio id='radio-all-prep-times' type='radio' name='preptime' value={0} checked={context.prepTime === 0} onChange={context.changePrepTimeHandler} />
                        <RadioLabel htmlFor='radio-all-prep-times'>Any</RadioLabel>

                        {(edges.map(({ node }) => (node.alternative_id)?<React.Fragment key={node.id}><Radio id={node.id} type='radio' name='preptime' value={node.alternative_id} checked={context.prepTime === node.alternative_id} onChange={context.changePrepTimeHandler}></Radio><RadioLabel htmlFor={node.id}>{node.value}</RadioLabel></React.Fragment>:null ))}
                    </>
                }
                
            </Selections.Consumer>
        </Container>
    )
}

export default PrepTime
