import React from 'react'

const initialState = {
    prepTime: 0,
    categories: [],
    tags: [],
    
    changePrepTimeHandler: () => {},
    toggleCategoryHandler: () => {},
    isCategoryActive: () => {},
    toggleTagHandler: () => {},
    isTagActive: () => {}
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

    render() {
        const { children } = this.props
        const { prepTime, categories } = this.state

        return (
            <Selections.Provider value={{
                prepTime,
                categories,
                changePrepTimeHandler: this.changePrepTimeHandler,
                toggleCategoryHandler: this.toggleCategoryHandler,
                isCategoryActive: this.isCategoryActive,
                toggleTagHandler: this.toggleTagHandler,
                isTagActive: this.isTagActive
            }}>
                {children}
            </Selections.Provider>
        )
    }
}

export default Selections 
export { SelectionsProvider }
