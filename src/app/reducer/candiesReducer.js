export const initialState = {
    currentCandies: 0,
    totalCandies: 0,
    candiesEaten: 0,
    candiesThrown: 0,
    woodenSword: false,
}

export const candiesTypes = {
    EAT: 'EAT',
    THROW: 'THROW',
    RESET: 'RESET',
    BUY_WOODEN_SWORD: "BUY_WOODEN_SWORD",
    INCREMENT: "INCREMENT",
    SUBTRACT: "SUBTRACT",
}

export const candiesReducer = (state, action) => {
    switch (action.type) {
        case 'TOTAL_INCREMENT':
            return { ...state, totalCandies: state.totalCandies + 1 }
        case 'INCREMENT':
            return { ...state, currentCandies: state.currentCandies + 1 }
        case 'EAT':
            return { ...state, candiesEaten: state.candiesEaten + action.payload, currentCandies: state.currentCandies - action.payload }
        case 'THROW':
            return { ...state, candiesThrown: state.candiesThrown + action.payload, currentCandies: state.currentCandies - 10 }
        case 'BUY_WOODEN_SWORD':
            return { ...state, woodenSword: true }
        case 'SUBTRACT':
            return { ...state, currentCandies: state.currentCandies - action.payload }

        case 'RESET':
            return initialState
        // case 'SAVE':
        //     push state to local storage
        // case 'LOAD':
        //     pull state from local storage

        default:
            return state
    }
}
