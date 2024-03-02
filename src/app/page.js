'use client'

import { useReducer, createContext } from "react";
import { CandiesCounter } from "./clientComponents/candiesCounter";
import { reducer, initialState } from "./reducer/candiesReducer";

export const GameData = createContext();

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GameData.Provider value={[state, dispatch]}>
      <main>
        <div>
          <button>Save</button>
          <button>Load</button>
          <button>Restart Game</button>
        </div>

        <div>
          <CandiesCounter />
        </div>
      </main>
    </GameData.Provider>
  );
}
