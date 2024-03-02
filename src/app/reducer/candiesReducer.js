export const initialState = {
    candiesEaten: 0,
    candiesThrown: 0,
    lollipops: 0,
    shopKeeperSeen: false
}

export const reducerTypes = {
    EAT: 'EAT',
    THROW: 'THROW',
    RESET: 'RESET',
    TOGGLE_SHOPKEEPER: "TOGGLE_SHOPKEEPER",
    BUY_SINGLE_LOLLIPOP: "BUY_SINGLE_LOLLIPOP"
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'EAT':
            return { ...state, candiesEaten: state.candiesEaten + action.payload }
        case 'THROW':
            return { ...state, candiesThrown: state.candiesThrown + action.payload }
        case 'BUY_SINGLE_LOLLIPOP':
            return { ...state, lollipops: state.lollipops + 1 }

        case 'TOGGLE_SHOPKEEPER':
            return { ...state, shopKeeperSeen: true }
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
