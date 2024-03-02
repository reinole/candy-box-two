'use client'

import { useState, useContext, useEffect } from "react"

import { reducerTypes } from '../reducer/candiesReducer'
import { GameData } from '../page'
import { ShopKeeper } from "./shopKeeper"

export const CandiesCounter = () => {
    const [state, dispatch] = useContext(GameData)
    const [candies, setCandies] = useState(55)

    useEffect(() => {
        const intervalCandies = setInterval(() => {
            setCandies(prevCandies => prevCandies + 1)
        }, 1000)

        return () => {
            clearInterval(intervalCandies)
        }
    }, [])

    const throwCandies = (candies) => {
        dispatch({ type: reducerTypes.THROW, payload: 10 })
        setCandies(candies - 10)
    }

    const eatCandies = (candies) => {
        dispatch({ type: reducerTypes.EAT, payload: candies })
        setCandies(0)
    }

    return (
        <div className="flex flex-col">
            <span>You have {candies} candies!</span>
            <span>You have {state.lollipops} lollipops!</span>
            <span>You have eaten {state.candiesEaten}</span>
            <span>You have thrown {state.candiesThrown} candies on the ground</span>
            <div className="flex flex-col">
                <button disabled={candies === 0} onClick={() => eatCandies(candies)}>Eat all the candies</button>
                <button disabled={candies < 10} onClick={() => throwCandies(candies)}>Throw 10 candies on the floor</button>
            </div>
            <ShopKeeper candies={candies} setCandies={setCandies} />
        </div>
    )
}


