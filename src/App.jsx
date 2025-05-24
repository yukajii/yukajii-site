import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: "40rem", margin: "3rem auto" }}>
      <h1>Welcome to Yukajii 👋</h1>
        <p>
          <a
            href="https://buttondown.email/daily-mt-picks"  // change handle if needed
            style={{
              display:"inline-block",
              background:"#1d4ed8",
              color:"#fff",
              padding:"10px 18px",
              borderRadius:"8px",
              fontWeight:600,
              textDecoration:"none"
            }}
          >
            📬 Subscribe to Daily MT Picks
          </a>
        </p>


    </main>
  );
}

export default App;
