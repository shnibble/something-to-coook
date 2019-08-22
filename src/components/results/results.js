import React from 'react'
import styled from 'styled-components'
import device from '../../util/device'
import Selections from '../contexts/selections'
import GetMealButton from '../getMealButton'

const Container = styled.section`
    position: relative;
    overflow: hidden;
`
const ResultsPager = styled.div`
    position: absolute;
    top: 5px;
    right: 0;
    bottom: 9px;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;

    ${device.tablet`
        bottom: 90px;
    `}
`
const ResultsPagerButtonLeft = styled.button`
    position: relative;
    width: 40px;
    height: 80px;
    border: none;
    background: none;
    cursor: pointer;
    z-index: 4;
    transition: all .25s ease;

    &:focus {
        outline: none;
        opacity: 0.85;
        transform: scale(1.01);
    }

    &:hover {
        opacity: 0.75;
        transform: scale(1.1);
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

    &:disabled > div {
        border-color: transparent #ccc transparent transparent;
        cursor: not-allowed;
    }
`
const ResultsPagerButtonRight = styled.button`
    position: relative;
    width: 40px;
    height: 80px;
    border: none;
    background: none;
    cursor: pointer;
    z-index: 4;
    transition: all .25s ease;

    &:focus {
        outline: none;
        opacity: 0.85;
        transform: scale(1.01);
    }

    &:hover {
        opacity: 0.75;
        transform: scale(1.1);
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

    &:disabled > div {
        border-color: transparent transparent transparent #ccc;
        cursor: not-allowed;
    }
`
const ResultsPagerResultContainer = styled.div`
    flex-grow: 1;
    position: relative;
    height: 100%;
    text-align: center;
`
const ResultsPagerResult = styled.div`
    position: absolute;
    left: 50%;
    margin-left: -50%;
    width: 100%;
    height: 100%;
    z-index: 2;
    transition: all .5s ease;
    transform: scale(0.9);
    pointer-events: none;
    background: #fff;
    box-shadow: 3px 2px 5px 2px rgba(0,0,0,0.1);

    &.active {
        opacity: 1;
        z-index: 3;
        transform: scale(1);
        pointer-events: auto;
        box-shadow: 3px 2px 5px 2px rgba(0,0,0,0.5);
    }
`
const GetMealButtonContainer = styled.div`
    display: none;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: center;
    padding: 5px;

    ${device.tablet`
        display: block;
    `}
`

class Results extends React.Component {

    render() {
        return (
            <Container>
                <ResultsPager>
                    <Selections.Consumer>
                        {(context) => 
                            <>
                                <ResultsPagerButtonLeft onClick={context.pageResultsBackward} disabled={context.activeMealIndex <= 0}><div/></ResultsPagerButtonLeft>
                                <ResultsPagerResultContainer>
                                        {context.meals.map((meal, index) => (
                                            <ResultsPagerResult key={`meal_${index}`} style={{ left: `${((index - context.activeMealIndex) * 10) + 50}%` }} className={(index === context.activeMealIndex)?'active':null}>
                                                <h3>{meal.name}</h3>
                                                <p>{meal.description}</p>
                                            </ResultsPagerResult>
                                        ))}
                                </ResultsPagerResultContainer>
                                <ResultsPagerButtonRight onClick={context.pageResultsForward} disabled={context.activeMealIndex >= context.meals.length - 1}><div/></ResultsPagerButtonRight>
                            </>
                        }
                    </Selections.Consumer>
                </ResultsPager>
                <GetMealButtonContainer>
                    <GetMealButton />
                </GetMealButtonContainer>
            </Container>
        )
    }
}

export default Results
