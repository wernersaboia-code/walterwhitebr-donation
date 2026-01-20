// src/components/Story/Story.tsx
import { useInView } from 'react-intersection-observer'
import './Story.css'

const locations = [
    {
        id: 1,
        name: "Casa do Walter",
        image: "/images/casa-walter.jpg",
        description: "A icônica casa da família White"
    },
    {
        id: 2,
        name: "Los Pollos Hermanos",
        image: "/images/los-pollos.jpg",
        description: "O restaurante do Gus Fring"
    },
    {
        id: 3,
        name: "A1A Car Wash",
        image: "/images/car-wash.jpg",
        description: "O lava-jato da família White"
    },
    {
        id: 4,
        name: "Deserto do Novo México",
        image: "/images/deserto.jpg",
        description: "Onde a magia acontecia"
    }
]

function Story() {
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true
    })

    return (
        <section className={`story ${inView ? 'visible' : ''}`} ref={ref}>
            <div className="story-container">
                <div className="story-icon">📖</div>
                <h2>Minha História</h2>

                <div className="story-content">
                    <p>
                        Olá! Eu sou o <span className="highlight">WalterWhiteBR</span>,
                        e como todo fã de Breaking Bad, tenho um sonho: conhecer
                        <span className="highlight"> Albuquerque</span>, a cidade onde tudo aconteceu!
                    </p>

                    <p>
                        Quero visitar os locais icônicos da série: a
                        <span className="location">casa do Walter White</span>, o
                        <span className="location">A1A Car Wash</span>, o restaurante
                        <span className="location">Los Pollos Hermanos</span>, o deserto
                        do Novo México e tantos outros lugares que marcaram essa obra-prima.
                    </p>

                    <p>
                        Infelizmente, como professor de química
                        <span className="joke">(brincadeira! 😅)</span>, não tenho
                        condições de bancar essa viagem sozinho. Por isso, peço a ajuda de vocês!
                    </p>
                </div>

                <h3 className="locations-title">📍 Lugares que quero visitar</h3>

                <div className="story-images">
                    {locations.map((location) => (
                        <div className="image-card" key={location.id}>
                            <div className="image-wrapper">
                                <img
                                    src={location.image}
                                    alt={location.name}
                                    loading="lazy"
                                />
                                <div className="image-overlay">
                                    <p>{location.description}</p>
                                </div>
                            </div>
                            <h4>{location.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Story