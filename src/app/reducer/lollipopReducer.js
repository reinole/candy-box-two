export const initialState = {
    lollipops: 0,
}

export const lollipopTypes = {
    BUY_SINGLE_LOLLIPOP: "BUY_SINGLE_LOLLIPOP",
    BUY_TEN_LOLLIPOPS: "BUY_TEN_LOLLIPOPS",
}

export const lollipopReducer = (state, action) => {
    switch (action.type) {
        case 'BUY_SINGLE_LOLLIPOP':
            return { ...state, lollipops: state.lollipops + 1 }
        case 'BUY_TEN_LOLLIPOPS':
            return { ...state, lollipops: state.lollipops + 10 }
        default:
            return state
    }
}