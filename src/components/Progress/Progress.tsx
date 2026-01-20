// src/components/Progress/Progress.tsx
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import './Progress.css'

interface ProgressProps {
    current: number
    goal: number
}

function Progress({ current, goal }: ProgressProps) {
    const percentage = Math.min((current / goal) * 100, 100)

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    })

    return (
        <section className="progress-section" ref={ref}>
            <div className="progress-container">
                <div className="progress-icon">📊</div>
                <h2>Progresso da Meta</h2>

                <div className="progress-stats">
                    <div className="stat">
                        <span className="stat-label">Arrecadado</span>
                        <span className="stat-value">
              R$ {inView ? (
                            <CountUp
                                end={current}
                                duration={2}
                                separator="."
                                decimals={2}
                                decimal=","
                            />
                        ) : '0,00'}
            </span>
                    </div>

                    <div className="stat goal">
                        <span className="stat-label">Meta</span>
                        <span className="stat-value">
              R$ {goal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </span>
                    </div>
                </div>

                <div className="progress-bar-container">
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: inView ? `${percentage}%` : '0%' }}
                        >
              <span className="progress-percentage">
                {inView ? (
                    <CountUp end={percentage} duration={2} decimals={0} suffix="%" />
                ) : '0%'}
              </span>
                        </div>
                    </div>
                </div>

                <div className="progress-message">
                    {percentage >= 100 ? (
                        <p className="complete">🎉 Meta alcançada! Obrigado a todos!</p>
                    ) : (
                        <p>Faltam <span>R$ {(goal - current).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span> para o sonho virar realidade!</p>
                    )}
                </div>

                <div className="donors">
                    <h3>💚 Últimos apoiadores</h3>
                    <div className="donor-list">
                        <div className="donor">
                            <span className="donor-avatar">👨‍🔬</span>
                            <span className="donor-name">Heisenberg Jr</span>
                            <span className="donor-amount">R$ 50,00</span>
                        </div>
                        <div className="donor">
                            <span className="donor-avatar">👩</span>
                            <span className="donor-name">Skyler Fan</span>
                            <span className="donor-amount">R$ 100,00</span>
                        </div>
                        <div className="donor">
                            <span className="donor-avatar">🧔</span>
                            <span className="donor-name">Jesse P.</span>
                            <span className="donor-amount">R$ 25,00</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Progress