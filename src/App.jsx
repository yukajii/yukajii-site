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
            href="https://buttondown.email/daily-mt-picks"   // change handle
            style={{
              display:"inline-block",
              background:"#ffbf00",
              color:"#000",
              padding:"10px 18px",
              borderRadius:"8px",
              fontWeight:600,
              textDecoration:"none"
            }}
          >
            📬 Subscribe&nbsp;to&nbsp;MT-5&nbsp;Daily
          </a>
        </p>

    </main>
  );
}

export default App;
