import './Steps.css';

const Steps = () => {
  return (
    <section id="como-funciona" className="steps">
        <div className="container">
            <div className="section-header" data-aos="fade-up">
                <h2 className="section-header__title">Tan fácil como cambiarle las pilas al control</h2>
            </div>
            <div className="steps__grid">
                <div className="step" data-aos="fade-up" data-aos-delay="0">
                    <div className="step__number">1</div>
                    <h4 className="step__title">Compra el Pack</h4>
                    <p className="step__description">Recibe tu kit con 3 armazones.</p>
                </div>
                <div className="step" data-aos="fade-up" data-aos-delay="150">
                    <div className="step__number">2</div>
                    <h4 className="step__title">Gradúa tus Lunas</h4>
                    <p className="step__description">Tu óptica usa nuestra plantilla.</p>
                </div>
                <div className="step" data-aos="fade-up" data-aos-delay="300">
                    <div className="step__number">3</div>
                    <h4 className="step__title">Uso Diario</h4>
                    <p className="step__description">Disfruta de lentes ligeros.</p>
                </div>
                <div className="step" data-aos="fade-up" data-aos-delay="450">
                    <div className="step__number">4</div>
                    <h4 className="step__title">¿Accidente?</h4>
                    <p className="step__description">Cambia el armazón en segundos.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Steps
