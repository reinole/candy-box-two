export const initialState = {
    candiesEaten: 0,
    candiesThrown: 0,
    lollipops: 0,
    woodenSword: false,
}

export const reducerTypes = {
    EAT: 'EAT',
    THROW: 'THROW',
    RESET: 'RESET',
    BUY_SINGLE_LOLLIPOP: "BUY_SINGLE_LOLLIPOP",
    BUY_TEN_LOLLIPOPS: "BUY_TEN_LOLLIPOPS",
    BUY_WOODEN_SWORD: "BUY_WOODEN_SWORD",
}

export const candiesReducer = (state, action) => {
    switch (action.type) {
        case 'EAT':
            return { ...state, candiesEaten: state.candiesEaten + action.payload }
        case 'THROW':
            return { ...state, candiesThrown: state.candiesThrown + action.payload }
        case 'BUY_SINGLE_LOLLIPOP':
            return { ...state, lollipops: state.lollipops + 1 }
        case 'BUY_TEN_LOLLIPOPS':
            return { ...state, lollipops: state.lollipops + 10 }
        case 'BUY_WOODEN_SWORD':
            return { ...state, woodenSword: true }

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
