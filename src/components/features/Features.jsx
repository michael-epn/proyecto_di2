import './Features.css'

const Features = () => {
  return (
    <section id="problema" class="features">
        <div class="container">
            <div class="section-header">
                <h2 class="section-header__title">¿Por qué seguir sufriendo con la óptica tradicional?</h2>
            </div>
            <div class="features__grid">
                <article class="card">
                    <div class="card__header"><i class="fa-solid fa-money-bill-wave card__icon"></i></div>
                    <h3 class="card__title">Costos Altos</h3>
                    <p class="card__text">Si se rompe el armazón, te obligan a comprar todo nuevo.</p>
                </article>
                <article class="card">
                    <div class="card__header"><i class="fa-solid fa-hourglass-half card__icon"></i></div>
                    <h3 class="card__title">Tiempos de Espera</h3>
                    <p class="card__text">Quedarte sin ver mientras esperas semanas es inaceptable.</p>
                </article>
                <article class="card">
                    <div class="card__header"><i class="fa-solid fa-glasses card__icon"></i></div>
                    <h3 class="card__title">Fragilidad</h3>
                    <p class="card__text">Los lentes costosos también se rompen con facilidad.</p>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Features
