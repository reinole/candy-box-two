'use client'

import { createContext } from "react";
import { CandiesCounter } from "./clientComponents/candiesCounter";
import { StoreProvider } from "./reducer/rootReducer";

export const GameData = createContext();

export default function Home() {
  return (
    <StoreProvider>
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
    </StoreProvider>
  );
}
