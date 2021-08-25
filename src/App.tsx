import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";

function App() {
  const { connected, publicKey } = useWallet();
  return (
    <div className="App">
      <header className="App-header">
        {connected ? `hello ${publicKey?.toBase58()}` : "please connect"}
      </header>
    </div>
  );
}

export default App;
