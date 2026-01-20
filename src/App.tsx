// src/App.tsx
import { useState } from 'react'
import Hero from './components/Hero/Hero'
import Story from './components/Story/Story'
import Progress from './components/Progress/Progress'
import Donation from './components/Donation/Donation'
import Footer from './components/Footer/Footer'
import EasterEggs from './components/EasterEggs/EasterEggs'
import './App.css'

function App() {
    const [darkMode, setDarkMode] = useState(true)
    const currentAmount = 3500
    const goalAmount = 10000

    return (
        <div className={`app ${darkMode ? 'dark' : 'light'}`}>
            <EasterEggs />
            <Hero />
            <Story />
            <Progress current={currentAmount} goal={goalAmount} />
            <Donation />
            <Footer toggleTheme={() => setDarkMode(!darkMode)} />
        </div>
    )
}

export default App