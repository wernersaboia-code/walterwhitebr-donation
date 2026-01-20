// src/components/EasterEggs/EasterEggs.tsx
import { useEffect, useState, useCallback, useRef } from 'react'
import Confetti from 'react-confetti'
import useSound from 'use-sound'

// Som da música tema
import themeSound from '../../assets/sounds/theme.mp3'

function EasterEggs() {
    const [showConfetti, setShowConfetti] = useState(false)
    const [konamiActivated, setKonamiActivated] = useState(false)
    const keysRef = useRef<string[]>([])
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    // Hook de som
    const [playTheme, { stop: stopTheme }] = useSound(themeSound, {
        volume: 0.5,
        interrupt: true
    })

    const konamiCode = [
        'ArrowUp', 'ArrowUp',
        'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight',
        'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ]

    // Atualiza tamanho da janela para o confetti
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Detecta Konami Code
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        keysRef.current = [...keysRef.current, e.key].slice(-10)

        if (JSON.stringify(keysRef.current) === JSON.stringify(konamiCode)) {
            // Ativa o Easter Egg!
            setKonamiActivated(true)
            setShowConfetti(true)
            playTheme()

            // Reseta as teclas
            keysRef.current = []

            // Para o confetti após 8 segundos
            setTimeout(() => setShowConfetti(false), 8000)
        }
    }, [playTheme])

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleKeyDown])

    // Função para desativar o modo Heisenberg
    const deactivateHeisenberg = () => {
        setKonamiActivated(false)
        stopTheme()
    }

    return (
        <>
            {/* Confetti */}
            {showConfetti && (
                <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    colors={['#00d956', '#00ff6a', '#ffffff', '#1a1a2e']}
                    recycle={false}
                    numberOfPieces={500}
                    gravity={0.1}
                />
            )}

            {/* Badge do Modo Heisenberg */}
            {konamiActivated && (
                <div className="heisenberg-mode" onClick={deactivateHeisenberg}>
                    <style>{`
            .heisenberg-mode {
              position: fixed;
              top: 20px;
              right: 20px;
              background: linear-gradient(135deg, #00d956, #00ff6a);
              color: #000;
              padding: 12px 24px;
              border-radius: 50px;
              font-weight: bold;
              z-index: 9999;
              animation: slideIn 0.5s ease, pulse 2s infinite;
              cursor: pointer;
              box-shadow: 0 0 30px rgba(0, 217, 86, 0.5);
              display: flex;
              align-items: center;
              gap: 10px;
            }
            
            .heisenberg-mode:hover {
              transform: scale(1.05);
            }
            
            .heisenberg-mode::after {
              content: '✕';
              font-size: 0.8rem;
              opacity: 0.7;
            }
            
            @keyframes slideIn {
              from { 
                opacity: 0; 
                transform: translateX(100px); 
              }
              to { 
                opacity: 1; 
                transform: translateX(0); 
              }
            }
            
            @keyframes pulse {
              0%, 100% { 
                box-shadow: 0 0 20px rgba(0, 217, 86, 0.5); 
              }
              50% { 
                box-shadow: 0 0 40px rgba(0, 217, 86, 0.8); 
              }
            }

            .heisenberg-toast {
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: rgba(0, 0, 0, 0.95);
              border: 2px solid #00d956;
              border-radius: 20px;
              padding: 40px 60px;
              z-index: 10000;
              text-align: center;
              animation: zoomIn 0.5s ease;
            }

            .heisenberg-toast h2 {
              color: #00d956;
              font-size: 2rem;
              margin-bottom: 10px;
            }

            .heisenberg-toast p {
              color: #888;
            }

            @keyframes zoomIn {
              from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(0.5);
              }
              to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
              }
            }
          `}</style>
                    🎩 Modo Heisenberg Ativo
                </div>
            )}

            {/* Toast de ativação */}
            {showConfetti && (
                <div className="heisenberg-toast">
                    <h2>🧪 YEAH, SCIENCE! 🧪</h2>
                    <p>Você desbloqueou o modo Heisenberg!</p>
                </div>
            )}
        </>
    )
}

export default EasterEggs