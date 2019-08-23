import React from 'react'
import axios from 'axios'
import uuidv4 from 'uuid/v4'

const initialState = {
    prepTime: 0,
    categories: [],
    tags: [],
    meals: [],
    mealsHistoryLimit: 10,
    activeMealIndex: 0,    
    changePrepTimeHandler: () => {},
    toggleCategoryHandler: () => {},
    isCategoryActive: () => {},
    toggleTagHandler: () => {},
    isTagActive: () => {},
    addMealHandler: () => {},
    getMealHandler: () => {},
    pageResultsBackward: () => {},
    pageResultsForward: () => {}
}

const Selections = React.createContext(initialState)

class SelectionsProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = initialState
    }

    changePrepTimeHandler = (event) => {
        const newValue = Number(event.target.value)
        if (newValue !== this.state.prepTime) {
            this.setState({ prepTime: newValue })
        }
    }

    toggleCategoryHandler = (id, name) => {
        let tempArray = [...this.state.categories]
        let foundIndex = -1
        id = Number(id)
        tempArray.map((category, index) => {
            if (category.id === id) {
                foundIndex = index
            }
            return true
        })
        if (foundIndex === -1) {
            tempArray.push({id, name})
        } else {
            tempArray.splice(foundIndex, 1)
        }
        this.setState({ categories: tempArray })
    }

    isCategoryActive = (id) => {
        id = Number(id)
        let found = false
        let tempArray = [...this.state.categories]
        tempArray.forEach(category => {
            if (category.id === id) {
                found = true
            }
        })
        return found
    }

    toggleTagHandler = (id, name) => {
        let tempArray = [...this.state.tags]
        let foundIndex = -1
        id = Number(id)
        tempArray.map((tag, index) => {
            if (tag.id === id) {
                foundIndex = index
            }
            return true
        })
        if (foundIndex === -1) {
            tempArray.push({id, name})
        } else {
            tempArray.splice(foundIndex, 1)
        }
        this.setState({ tags: tempArray })
    }

    isTagActive = (id) => {
        id = Number(id)
        let found = false
        let tempArray = [...this.state.tags]
        tempArray.forEach(tag => {
            if (tag.id === id) {
                found = true
            }
        })
        return found
    }

    addMealHandler = (meal) => {
        let tempArray = [...this.state.meals]
        tempArray.push(meal)
        if (tempArray.length > this.state.mealsHistoryLimit) {
            tempArray.shift()
        }
        this.setState({ meals: tempArray, activeMealIndex: tempArray.length -1 })
    }
    
    getMealHandler = () => {
        const prepTime = this.state.prepTime
        let time = null
        if (prepTime) {
            time = prepTime
        }
        const categories = this.state.categories.map(category => category.name)
        const tags = this.state.tags.map(tag => tag.name)

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
            if (result.data[0].error) {
                alert(`Oops! Something went wrong with the API server. Sorry about that :(\n${result.data[0].errorMessage}`)
            } else if (result.data[0].resultsFound <= 0) {
                alert('Sorry but no meals were found using those parameters. Try expanding your search and go again.')
            } else {
                result.data[1].uniqueKey = uuidv4()
                this.addMealHandler(result.data[1])
            }
        })
        .catch(error => {
            alert(`Oops! Something went wrong with the API connection. Sorry about that :(\n${error}`)
        })
    }

    pageResultsBackward = () => {
        const { activeMealIndex } = this.state
        if (activeMealIndex > 0) {
            this.setState({ activeMealIndex: activeMealIndex - 1 })
        }
    }

    pageResultsForward = () => {
        const { activeMealIndex, meals } = this.state
        if (activeMealIndex < meals.length -1 ) {
            this.setState({ activeMealIndex: this.state.activeMealIndex + 1 })
        }
    }

    render() {
        const { children } = this.props
        const { prepTime, categories, tags, meals, activeMealIndex } = this.state

        return (
            <Selections.Provider value={{
                prepTime,
                categories,
                tags,
                meals,
                activeMealIndex,
                changePrepTimeHandler: this.changePrepTimeHandler,
                toggleCategoryHandler: this.toggleCategoryHandler,
                isCategoryActive: this.isCategoryActive,
                toggleTagHandler: this.toggleTagHandler,
                isTagActive: this.isTagActive,
                addMealHandler: this.addMealHandler,
                getMealHandler: this.getMealHandler,
                pageResultsBackward: this.pageResultsBackward,
                pageResultsForward: this.pageResultsForward
            }}>
                {children}
            </Selections.Provider>
        )
    }
}

export default Selections 
export { SelectionsProvider }
