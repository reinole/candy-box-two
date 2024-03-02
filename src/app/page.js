'use client'

import { CandiesCounter } from "./clientComponents/candiesCounter";
import { StoreProvider } from "./reducer/rootReducer";

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
