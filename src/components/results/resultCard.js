import React from 'react'
import styled from 'styled-components'
import device from '../../util/device'
import SearchIconSource from '../../images/icon-search.png'
import ExpandIconSource from '../../images/icon-expand.png'
import ShrinkIconSource from '../../images/icon-shrink.png'

const Container = styled.article`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 50%;
    margin-left: -50%;
    width: 100%;
    height: 100%;
    transition: all .5s ease;
    background: #fff;
    box-shadow: 3px 2px 5px 2px rgba(0,0,0,0.5);
    font-family: 'Montserrat', sans-serif;
    transition: all .25s ease;

    &.active.expanded {
        position: fixed;
        top: 15px;
        right: 25px;
        bottom: 15px;
        left: 25px;
        width: auto;
        height: auto;
        margin: 0;
        z-index: 5;
    }


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
const Header = styled.div`
    flex-shrink: 1;
    padding: 5px;
    border-bottom: 1px solid #f2f2f2;
`
const Title = styled.h3`
    font-size: 32px;
    padding: 5px;
    color: #f88000;
    font-weight: normal;
    text-align: left;

    ${device.tablet`
        font-size: 26px;
    `}
    ${device.mobile`
        font-size: 18px;
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
const Description = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    position: relative;
    font-size: 20px;
    text-align: left;
    overflow: hidden;

    &.expanded {
        overflow: auto;
    }

    & > p {
        padding: 10px;
    }

    ${device.tablet`
        font-size: 18px;
    `}
    ${device.mobile`
        font-size: 16px;
    `}
`
const DescriptionOverlay = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 20px;
    background: linear-gradient(to bottom, transparent, #fff, #fff);
`
const Footer = styled.div`
    display: none;
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 50px;
    background: #f2f2f2;

    &.active {
        display: block;
    }
`
const SearchButton = styled.button`
    width: 40px;
    height: 40px;
    margin: 5px;
    border: none;
    background: none;
    background-image: url(${SearchIconSource});
    background-size: cover;
    cursor: pointer;
    transition: all .25s ease;

    &:focus {
        outline: none;
        opacity: 0.85;
        transform: scale(1.02);
    }
    &:hover {
        opacity: 0.75;
        transform: scale(1.1);
    }
`
const ViewButton = styled.button`
    width: 40px;
    height: 40px;
    margin: 5px;
    border: none;
    background: none;
    background-image: url(${ExpandIconSource});
    background-size: cover;
    cursor: pointer;
    transition: all .25s ease;

    &:focus {
        outline: none;
        opacity: 0.85;
        transform: scale(1.02);
    }
    &:hover {
        opacity: 0.75;
        transform: scale(1.1);
    }

    &.expanded {
        background-image: url(${ShrinkIconSource});

        &:focus {
            outline: none;
            opacity: 0.85;
            transform: scale(0.98);
        }
        &:hover {
            opacity: 0.75;
            transform: scale(0.9);
        }
    }
`

const initialState = {
    expanded: false
}

class ResultCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    toggleView = () => {
        this.setState({ expanded: !this.state.expanded })
    }

    componentDidUpdate() {
        if (this.props.position !== 'active' && this.state.expanded) {
            this.setState({ expanded: false })
        }
    }

    render() {
        const { result, position } = this.props
        const { expanded } = this.state

        return (
            <Container className={`${position} ${(expanded)?'expanded':null}`}>
                <Header>
                    <Time>{result.prep_time}</Time>
                    <Title>{result.name}</Title>
                    <TagsContainer>
                        {(result.categories.map(category => <Tag key={`${result.uniqueKey}_category_${category}`}>{category}</Tag>))}
                        {((result.tags[0])?result.tags.map(tag => <Tag key={`${result.uniqueKey}_tag_${tag}`}>{tag}</Tag>):null)}
                    </TagsContainer>
                </Header>
                <Description className={(expanded)?'expanded':null}>
                    <p>{result.description}</p>
                    <DescriptionOverlay />
                </Description>
                <Footer className={position}>
                    <SearchButton title='Search for recipes' />
                    <ViewButton title='Toggle expanded view' className={(expanded)?'expanded':null} onClick={this.toggleView} />
                </Footer>
            </Container>
        )
    }
}

export default ResultCard
