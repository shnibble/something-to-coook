import React from 'react'

const testMeals = [
    {
    "name": "Bulgogi",
    "description": "Thin, marinated slices of meat grilled, cooked in a skillet or stir-fried. This is a classic South Korean dish that goes well with a bed of rice.",
    "prep_time": "1 hour",
    "image": null,
    "categories": [
    "Meat"
    ],
    "tags": [
    "Stir-fry"
    ]
    },
    {
    "name": "Burgers",
    "description": "It's a hamburger. Made out of meat. On a bun.",
    "prep_time": "15 - 30 minutes",
    "image": null,
    "categories": [
    "Sandwich"
    ],
    "tags": [
    null
    ]
    },
    {
    "name": "Chili",
    "description": "Usually made over a long period of time in a slow cooker or in a large pot, this combination of... well really anything that looks like maybe beans and some sort of protein with a reddish hue is considered chili. Check out some recipes or simply throw a bunch of stuff in a crockpot and you could probably call it chili. Goes well with rice, corn bread, rolls, and often the source of local cooking competitions.",
    "prep_time": "3+ hours",
    "image": null,
    "categories": [
    "Meat",
    "Slow Cooker",
    "Vegan",
    "Vegetarian"
    ],
    "tags": [
    "Spicy"
    ]
    },
    {
    "name": "Crab Cakes",
    "description": "Packed with ocean flavor and a texture like no other \"cake\" out there, crab cakes are usually outrageously expensive when ordered out. You can make your own in just a few minutes and they will be incredible!",
    "prep_time": "15 - 30 minutes",
    "image": null,
    "categories": [
    "Seafood"
    ],
    "tags": [
    "Dairy Free",
    "Low Sugar",
    "Nut Free"
    ]
    },
    {
    "name": "Curry",
    "description": "A magical and typically spicy blend of Indian spices that comes in a multitude of different dishes and styles. The world of curry is vast and full of powerful flavors.",
    "prep_time": "3+ hours",
    "image": null,
    "categories": [
    "Meat",
    "Vegetarian"
    ],
    "tags": [
    "Spicy"
    ]
    },
    {
    "name": "Enchiladas",
    "description": "Yet another dish made with tortillas, but this time soaked in a delicious sauce and topped with mounds of cheese and baked. This dish should most definitely be served with rice and beans and a chips and guac appetizer. Fill with your choice of meat or vegetables.",
    "prep_time": "1 hour",
    "image": null,
    "categories": [
    "Meat",
    "Vegetarian"
    ],
    "tags": [
    "Family Sized",
    "Nut Free",
    "Spicy"
    ]
    },
    {
    "name": "Fajitas",
    "description": "Basically a taco but disassembled, thereby making it much less effort to prepare. Can be made with chicken, steak, shrimp, fish, veggies and vegan with relative ease.",
    "prep_time": "1 hour",
    "image": null,
    "categories": [
    "Fish",
    "Meat",
    "Seafood",
    "Vegan",
    "Vegetarian"
    ],
    "tags": [
    "Family Sized",
    "Finger Food",
    "Nut Free",
    "Party Food",
    "Spicy"
    ]
    },
    {
    "name": "Fried Chicken",
    "description": "A southern tradition in the US that never gets old. There are dozens of \"traditional\" and \"classic\" recipes out there so pick one and get to deep frying!\n\nGoes well with potatoes, corn, biscuits and other southern sides.",
    "prep_time": "1 hour",
    "image": null,
    "categories": [
    "Meat"
    ],
    "tags": [
    "Family Sized",
    "Finger Food",
    "Nut Free",
    "Party Food"
    ]
    },
    {
    "name": "Lemon-Olive Grilled Chicken",
    "description": "Skip the oil and butter and use olives and lemon for a simple, low fat, healthy chicken dinner. Serve with some rice or quinoa and your favorite vegetable.",
    "prep_time": "1 hour",
    "image": null,
    "categories": [
    "Meat"
    ],
    "tags": [
    "Low Fat"
    ]
    },
    {
    "name": "Macaroni and Cheese",
    "description": "Skip the boxed stuff and make your own pot of delicious mac n' cheese. Or turn it into something a little classier by topping with breadcrumbs and baking in the oven to give it a nice crust on top.\n\nWhile usually served as a side itself, macaroni and cheese is easy to elevate by adding in some protein and different flavors for some that stands on its own. With the newer dairy substitutes out there, it is entirely possible to make a vegan version without sacrificing flavor.",
    "prep_time": "15 - 30 minutes",
    "image": null,
    "categories": [
    "Vegan",
    "Vegetarian"
    ],
    "tags": [
    "Family Sized",
    "Nut Free",
    "Party Food"
    ]
    }
]

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
