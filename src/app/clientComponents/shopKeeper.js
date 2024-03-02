'use client'

import React, { useContext, useEffect } from "react";
import { shopReducerTypes } from '../reducer/shopReducer'
import { candiesTypes } from '../reducer/candiesReducer'
import { lollipopTypes } from '../reducer/lollipopReducer'
import { StoreContext } from '../reducer/rootReducer'

export const ShopKeeper = () => {
    const [state, dispatch] = useContext(StoreContext)

    useEffect(() => {
        if (state.candies.currentCandies > 59 && !state.shop.shopKeeperSeen) {
            dispatch({ type: shopReducerTypes.TOGGLE_SHOPKEEPER })
        }
        if (state.candies.currentCandies > 149 && !state.shop.swordsVisible) {
            dispatch({ type: shopReducerTypes.TOGGLE_SWORD })
        }
        if (state.candies.currentCandies > 499 && !state.shop.tenLollipopsVisible) {
            dispatch({ type: shopReducerTypes.TOGGLE_TEN_LOLLIPOPS })
        }
    }, [state.candies.currentCandies, dispatch])

    const buyLollipop = (candies, lollipops) => {
        if (lollipops === 10) {
            dispatch({ type: lollipopTypes.BUY_TEN_LOLLIPOPS })
            dispatch({ type: candiesTypes.SUBTRACT, payload: 500 })
            // setCandies(candies - 500)
        }

        if (lollipops === 1) {
            dispatch({ type: lollipopTypes.BUY_SINGLE_LOLLIPOP })
            dispatch({ type: candiesTypes.SUBTRACT, payload: 60 })
            // setCandies(candies - 60)
        }
    }

    if (state.shop.shopKeeperSeen === false) {
        return null
    }

    return (
        <div>
            <h1>The Candy merchant</h1>
            <div>
                <button disabled={state.candies.currentCandies < 60} onClick={() => buyLollipop(state.candies.currentCandies, 1)}>Buy 1 lollipop (60 candies)</button>
                {state.shop.tenLollipopsVisible && <button disabled={candies < 500} onClick={() => buyLollipop(state.candies.currentCandies, 10)}>Buy 10 lollipop (500 candies)</button>}
                <button disabled={state.candies.currentCandies < 150 || state.candies.woodenSword} onClick={() => dispatch({ type: candiesTypes.BUY_WOODEN_SWORD })}>Buy a wooden sword (150 candies)</button>
            </div>
        </div>
    );
} 