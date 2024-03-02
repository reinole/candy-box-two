import React, { useContext, useEffect } from "react";
import { reducerTypes } from '../reducer/candiesReducer'
import { GameData } from '../page'

export const ShopKeeper = ({ candies, setCandies }) => {
    const [state, dispatch] = useContext(GameData)
    console.log(candies)

    useEffect(() => {
        if (candies > 59 && !state.shopKeeperSeen) {
            dispatch({ type: reducerTypes.TOGGLE_SHOPKEEPER })
        }
        if (candies > 149 && !state.swordsVisible) {
            dispatch({ type: reducerTypes.TOGGLE_SWORD })
        }
        if (candies > 499 && !state.tenLollipopsVisible) {
            dispatch({ type: reducerTypes.TOGGLE_TEN_LOLLIPOPS })
        }
    }, [candies, dispatch, state.shopKeeperSeen, state.tenLollipopsVisible, state.swordsVisible])

    const buyLollipop = (candies, lollipops) => {
        if (lollipops === 10) {
            dispatch({ type: reducerTypes.BUY_TEN_LOLLIPOPS })
            setCandies(candies - 500)
        }

        if (lollipops === 1) {
            dispatch({ type: reducerTypes.BUY_SINGLE_LOLLIPOP })
            setCandies(candies - 60)
        }
    }

    if (state.shopKeeperSeen === false) {
        return null
    }

    return (
        <div>
            <h1>The Candy merchant</h1>
            <div>
                <button disabled={candies < 60} onClick={() => buyLollipop(candies, 1)}>Buy 1 lollipop (60 candies)</button>
                {state.tenLollipopsVisible && <button disabled={candies < 500} onClick={() => buyLollipop(candies, 10)}>Buy 10 lollipop (500 candies)</button>}
                <button disabled={candies < 150 || state.woodenSword} onClick={() => dispatch({ type: reducerTypes.BUY_WOODEN_SWORD })}>Buy a wooden sword (150 candies)</button>
            </div>
        </div>
    );
} 