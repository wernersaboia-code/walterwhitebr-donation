// src/components/Footer/Footer.tsx
import './Footer.css'

interface FooterProps {
    toggleTheme: () => void
}

function Footer({ toggleTheme }: FooterProps) {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <span className="element-small">W</span>
                    <span className="element-small">Br</span>
                </div>

                <p className="footer-quote">"I am the one who knocks!" 🚪</p>

                <p className="footer-credits">
                    Feito com 💚 por WalterWhiteBR
                </p>

                <button className="theme-toggle" onClick={toggleTheme}>
                    🌓 Alternar Tema
                </button>

                {/* Easter Egg visível */}
                <div className="konami-hint">
                    <p>🎮 Quer desbloquear um segredo?</p>
                    <p className="konami-code">
                        <span>↑</span>
                        <span>↑</span>
                        <span>↓</span>
                        <span>↓</span>
                        <span>←</span>
                        <span>→</span>
                        <span>←</span>
                        <span>→</span>
                        <span>B</span>
                        <span>A</span>
                    </p>
                    <p className="konami-instruction">Digite no teclado e veja a mágica! 🧪</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer