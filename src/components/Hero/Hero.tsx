// src/components/Hero/Hero.tsx
import { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
    const [text, setText] = useState('')
    const [showLogo, setShowLogo] = useState(false)

    const fullText = "I am the one who knocks..."

    // Efeito Typewriter
    useEffect(() => {
        let index = 0
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.slice(0, index))
                index++
            } else {
                clearInterval(timer)
                setTimeout(() => setShowLogo(true), 500)
            }
        }, 100)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="hero">
            {/* Video de fundo */}
            <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                poster="/desert-poster.jpg"
            >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-desert-landscape-1944-large.mp4" type="video/mp4" />
            </video>

            {/* Overlay escuro */}
            <div className="hero-overlay"></div>

            {/* Fumaça verde realista */}
            <div className="smoke-container">
                {/* Névoa base */}
                <div className="smoke-base"></div>

                {/* Fumaças principais subindo */}
                <div className="smoke smoke-1"></div>
                <div className="smoke smoke-2"></div>
                <div className="smoke smoke-3"></div>
                <div className="smoke smoke-4"></div>
                <div className="smoke smoke-5"></div>

                {/* Partículas menores */}
                <div className="smoke-particle"></div>
                <div className="smoke-particle"></div>
                <div className="smoke-particle"></div>
                <div className="smoke-particle"></div>
                <div className="smoke-particle"></div>
                <div className="smoke-particle"></div>
            </div>

            {/* Conteúdo */}
            <div className="hero-content">
                <p className="typewriter">{text}<span className="cursor">|</span></p>

                <div className={`logo-container ${showLogo ? 'visible' : ''}`}>
                    <h1 className="main-title">
                        <span className="element br">Br</span>eaking
                        <span className="element ba">Ba</span>d
                    </h1>
                    <h2 className="subtitle">Ajude WalterWhiteBR</h2>
                    <p className="tagline">A realizar o sonho de conhecer Albuquerque</p>
                </div>

                <a href="#donation" className={`cta-button ${showLogo ? 'visible' : ''}`}>
                    🧪 Contribua Agora
                </a>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <span>Scroll</span>
                <div className="mouse"></div>
            </div>
        </section>
    )
}

export default Hero