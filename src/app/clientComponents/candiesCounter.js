'use client'

import { useState, useContext, useEffect } from "react"

import { candiesTypes } from '../reducer/candiesReducer'
import { ShopKeeper } from "./shopKeeper"
import { StoreContext } from '../reducer/rootReducer'

export const CandiesCounter = () => {
    const [state, dispatch] = useContext(StoreContext)

    useEffect(() => {
        const intervalCandies = setInterval(() => {
            dispatch({ type: 'INCREMENT' })
            dispatch({ type: 'TOTAL_INCREMENT' })
        }, 1000)

        return () => {
            clearInterval(intervalCandies)
        }
    }, [dispatch])

    const throwCandies = (candies) => {
        dispatch({ type: candiesTypes.THROW, payload: 10 })
    }

    const eatCandies = (candies) => {
        dispatch({ type: candiesTypes.EAT, payload: candies })
    }


    return (
        <div className="flex flex-col">

            <span>You have {state.candies.currentCandies} candies!</span>
            <span>You have {state.lollipops.lollipops} lollipops!</span>
            <span>You have eaten {state.candies.candiesEaten}</span>
            <span>You have thrown {state.candies.candiesThrown} candies on the ground</span>
            <div className="flex flex-col">
                <button disabled={state.candies.currentCandies === 0} onClick={() => eatCandies(state.candies.currentCandies)}>Eat all the candies</button>
                <button disabled={state.candies.currentCandies < 10} onClick={() => throwCandies(state.candies.currentCandies)}>Throw 10 candies on the floor</button>
            </div>
            <ShopKeeper />
        </div>
    )
}


