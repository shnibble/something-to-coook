import React from 'react'
import styled from 'styled-components'
import device from '../../util/device'

const Container = styled.article`
    position: absolute;
    left: 50%;
    margin-left: -50%;
    width: 100%;
    height: 100%;
    transition: all .5s ease;
    background: #fff;
    box-shadow: 3px 2px 5px 2px rgba(0,0,0,0.5);
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;

    &.before {
        left: -150%;
        pointer-events: none;
        transform: scale(0.1);
    }
    &.after {
        left: 150%;
        pointer-events: none;
        transform: scale(0.5);
    }

    &.result-enter {
        left: 150%;
        transform: scale(0.75);
    }
    &.result-enter-active {
        left: 50%;
        transform: scale(1);
    }

    &.result-exit {
        transform: scale(1);
    }
    &.result-exit-active {
        transform: scale(0.1);
    }
`
const Padding = styled.div`
    padding: 10px;
`
const Title = styled.h3`
    font-size: 32px;
    padding: 5px;
    color: #f88000;
    font-weight: normal;

    ${device.tablet`
        font-size: 26px;
    `}
    ${device.mobile`
        font-size: 18px;
    `}
`
const Description = styled.p`
    padding: 10px;
    font-size: 20px;
    text-align: left;

    ${device.tablet`
        font-size: 18px;
    `}
    ${device.mobile`
        font-size: 16px;
    `}
`
const Time = styled.div`
    font-size: 12px;
    float: right;
    background: #f2f2f2;
    border-radius: 4px;
    padding: 5px;
    margin: 2px;
    color: #999;
`
const TagsContainer = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const Tag = styled.li`
    font-size: 12px;
    background: #f2f2f2;
    border-radius: 4px;
    padding: 5px;
    margin: 2px;
    color: #999;
`
const BottomOverlay = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 30px;
    background: linear-gradient(to bottom, transparent, #fff);
`

const ResultCard = ({ result, position }) => {
    return (
        <Container className={position}>
            <Padding>
                <Time>{result.prep_time}</Time>
                <Title>{result.name}</Title>
                <TagsContainer>
                    {(result.categories.map(category => <Tag key={`${result.uniqueKey}_category_${category}`}>{category}</Tag>))}
                    {((result.tags[0])?result.tags.map(tag => <Tag key={`${result.uniqueKey}_tag_${tag}`}>{tag}</Tag>):null)}
                </TagsContainer>
                <Description>{result.description}</Description>
            </Padding>
            <BottomOverlay />
        </Container>
    )
}

export default ResultCard
