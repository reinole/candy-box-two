import React, { useReducer, createContext } from "react";
import { candiesReducer, initialState as candiesInitial } from './candiesReducer'
import { shopReducer, initialState as shopInitial } from './shopReducer';
import { lollipopReducer, initialState as lollipopInitial } from "./lollipopReducer";

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
    candies: candiesInitial,
    lollipops: lollipopInitial,
    shop: shopInitial,
};

const rootReducer = combineReducers({
    candies: candiesReducer,
    lollipops: lollipopReducer,
    shop: shopReducer,
});

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rootReducer, initialState);

    const store = React.useMemo(() => [state, dispatch], [state]);

    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}