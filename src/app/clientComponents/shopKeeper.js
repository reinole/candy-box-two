'use client'

import React, { useContext, useEffect } from "react";
import { shopReducerTypes } from '../reducer/shopReducer'
import { candiesTypes } from '../reducer/candiesReducer'
import { lollipopTypes } from '../reducer/lollipopReducer'
import { StoreContext } from '../reducer/rootReducer'

export const ShopKeeper = ({ candies, setCandies }) => {
    const [state, dispatch] = useContext(StoreContext)

    useEffect(() => {
        if (candies > 59 && !state.shop.shopKeeperSeen) {
            dispatch({ type: shopReducerTypes.TOGGLE_SHOPKEEPER })
        }
        if (candies > 149 && !state.shop.swordsVisible) {
            dispatch({ type: shopReducerTypes.TOGGLE_SWORD })
        }
        if (candies > 499 && !state.shop.tenLollipopsVisible) {
            dispatch({ type: shopReducerTypes.TOGGLE_TEN_LOLLIPOPS })
        }
    }, [candies, dispatch])

    const buyLollipop = (candies, lollipops) => {
        if (lollipops === 10) {
            dispatch({ type: lollipopTypes.BUY_TEN_LOLLIPOPS })
            setCandies(candies - 500)
        }

        if (lollipops === 1) {
            dispatch({ type: lollipopTypes.BUY_SINGLE_LOLLIPOP })
            setCandies(candies - 60)
        }
    }

    if (state.shop.shopKeeperSeen === false) {
        return null
    }

    return (
        <div>
            <h1>The Candy merchant</h1>
            <div>
                <button disabled={candies < 60} onClick={() => buyLollipop(candies, 1)}>Buy 1 lollipop (60 candies)</button>
                {state.shop.tenLollipopsVisible && <button disabled={candies < 500} onClick={() => buyLollipop(candies, 10)}>Buy 10 lollipop (500 candies)</button>}
                <button disabled={candies < 150 || state.candies.woodenSword} onClick={() => dispatch({ type: candiesTypes.BUY_WOODEN_SWORD })}>Buy a wooden sword (150 candies)</button>
            </div>
        </div>
    );
} 