export const shopInitialState = {
    shopKeeperSeen: false,
    tenLollipopsVisible: false,
    swordsVisible: false,
}

export const shopReducerTypes = {
    TOGGLE_SHOPKEEPER: "TOGGLE_SHOPKEEPER",
    TOGGLE_TEN_LOLLIPOPS: "TOGGLE_TEN_LOLLIPOPS",
    TOGGLE_SWORD: "TOGGLE_SWORD",
}

export const shopReducer = (state, action) => {
    switch (action.type) {
        case shopReducerTypes.TOGGLE_SHOPKEEPER:
            return { ...state, shopKeeperSeen: true }
        case shopReducerTypes.TOGGLE_TEN_LOLLIPOPS:
            return { ...state, tenLollipopsVisible: true }
        case shopReducerTypes.TOGGLE_SWORD:
            return { ...state, swordsVisible: true }
        default:
            return state
    }
}