import { candiesReducer } from './candiesReducer'
import { shopReducer } from './shopReducer';
import React, { useReducer, createContext } from "react";

const combineReducers = (slices) => (state, action) =>
    Object.keys(slices).reduce( // use for..in loop, if you prefer it
        (acc, prop) => ({
            ...acc,
            [prop]: slices[prop](acc[prop], action),
        }),
        state
    );

export const StoreContext = createContext();

const initialState = {
    candies: {
        candiesEaten: 0,
        candiesThrown: 0,
        lollipops: 0,
        woodenSword: false,
    },
    shop: {
        shopKeeperSeen: false,
        tenLollipopsVisible: false,
        swordsVisible: false,
    },
};

const rootReducer = combineReducers({
    candies: candiesReducer,
    shop: shopReducer,
});

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);

    const store = React.useMemo(() => [state, dispatch], [state]);

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}