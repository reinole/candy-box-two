import React, { useContext, useEffect } from "react";
import { reducerTypes } from '../reducer/candiesReducer'
import { GameData } from '../page'

export const ShopKeeper = ({ candies, setCandies }) => {
    const [state, dispatch] = useContext(GameData)

    useEffect(() => {
        if (candies === 60) {
            dispatch({ type: reducerTypes.TOGGLE_SHOPKEEPER })
        }
    }, [candies, dispatch])

    if (state.shopKeeperSeen === false) {
        return null
    }

    const buyLollipop = (candies) => {
        dispatch({ type: reducerTypes.BUY_SINGLE_LOLLIPOP })
        setCandies(candies - 60)
    }

    return (
        <div>
            <h1>The Candy merchant</h1>
            <div>
                <button onClick={() => buyLollipop(candies)}>Buy 1 lollipop (60 candies)</button>

            </div>
        </div>
    );
} 