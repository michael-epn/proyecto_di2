import './Steps.css';

const Steps = () => {
  return (
    <section id="como-funciona" class="steps">
        <div class="container">
            <div class="section-header">
                <h2 class="section-header__title">Tan fácil como cambiarle las pilas al control</h2>
            </div>
            <div class="steps__grid">
                <div class="step">
                    <div class="step__number">1</div>
                    <h4 class="step__title">Compra el Pack</h4>
                    <p class="step__description">Recibe tu kit con 3 armazones.</p>
                </div>
                <div class="step">
                    <div class="step__number">2</div>
                    <h4 class="step__title">Gradúa tus Lunas</h4>
                    <p class="step__description">Tu óptica usa nuestra plantilla.</p>
                </div>
                <div class="step">
                    <div class="step__number">3</div>
                    <h4 class="step__title">Uso Diario</h4>
                    <p class="step__description">Disfruta de lentes ligeros.</p>
                </div>
                <div class="step">
                    <div class="step__number">4</div>
                    <h4 class="step__title">¿Accidente?</h4>
                    <p class="step__description">Cambia el armazón en segundos.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Steps
