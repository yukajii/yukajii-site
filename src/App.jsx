import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: "40rem", margin: "3rem auto" }}>
      <h1>Welcome to Yukajii 👋</h1>
      <p>
        This is my playground for coding experiments, side-projects, and write-ups.
        Grab a ☕ and explore!
      </p>

      <h2>📬 Newsletter</h2>
      <p>
        I send occasional emails with new experiments, articles, and open-source drops.
      </p>
      <p>
        <a href="/newsletter" style={{ fontWeight: 600 }}>
          → Go to the Newsletter page
        </a>
      </p>
    </main>
  );
}

export default App;
