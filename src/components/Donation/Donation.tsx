// src/components/Donation/Donation.tsx
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import useSound from 'use-sound'
import './Donation.css'

// Sons
import clickSound from '../../assets/sounds/click.mp3'
import successSound from '../../assets/sounds/success.mp3'

function Donation() {
    const [copied, setCopied] = useState(false)
    const paypalLink = 'https://paypal.me/walterwhitebr'

    // Hooks de som
    const [playClick] = useSound(clickSound, { volume: 0.5 })
    const [playSuccess] = useSound(successSound, { volume: 0.7 })

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    const copyLink = () => {
        navigator.clipboard.writeText(paypalLink)
        playSuccess()
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const handleDonateClick = () => {
        playClick()
    }

    return (
        <section className={`donation ${inView ? 'visible' : ''}`} ref={ref} id="donation">
            <div className="donation-container">
                <div className="donation-icon">💚</div>
                <h2>Faça sua Doação</h2>
                <p className="donation-subtitle">
                    Toda contribuição nos aproxima de Albuquerque!
                </p>

                <div className="donation-methods">
                    {/* QR Code */}
                    <div className="donation-card qr-card">
                        <h3>📱 QR Code</h3>
                        <p>Escaneie com seu celular</p>
                        <div className="qr-code">
                            <img
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${paypalLink}&bgcolor=ffffff&color=000000`}
                                alt="QR Code PayPal"
                            />
                        </div>
                    </div>

                    {/* Botão PayPal */}
                    <div className="donation-card button-card">
                        <h3>💳 PayPal</h3>
                        <p>Clique no botão abaixo</p>

                        <a
                            href={paypalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="paypal-button"
                            onClick={handleDonateClick}
                        >
                            <svg className="paypal-logo" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106z"/>
                            </svg>
                            Doar com PayPal
                        </a>

                        <div className="link-copy">
                            <input
                                type="text"
                                value={paypalLink}
                                readOnly
                            />
                            <button onClick={copyLink}>
                                {copied ? '✓ Copiado!' : 'Copiar'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sugestões de valores */}
                <div className="suggested-amounts">
                    <p>Sugestões de valores:</p>
                    <div className="amounts">
                        {[10, 25, 50, 100].map((amount) => (
                            <a
                                key={amount}
                                href={`${paypalLink}/${amount}BRL`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="amount-btn"
                                onClick={handleDonateClick}
                            >
                                R$ {amount}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mensagem de agradecimento */}
                <div className="thank-you">
                    <p>🙏 Qualquer valor é bem-vindo!</p>
                    <p className="small">
                        "Say my name" - e o seu estará eternamente na minha gratidão!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Donation