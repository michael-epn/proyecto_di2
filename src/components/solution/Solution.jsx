import './Solution.css'

const solution = () => {
  return (
    <section id="solucion" class="solution">
        <div class="container solution__container">
            <div class="solution__visual">
                <img src="../src/assets/pack-remarco.png" alt="Kit ReMarco con 3 armazones" class="solution__img" loading="lazy" />
            </div>
            <div class="solution__content">
                <span class="tag">Innovación</span>
                <h2 class="solution__title">Te presentamos el <span class="text--highlight">Pack ReMarco</span></h2>
                <p class="solution__description">No vendemos un lente, vendemos tranquilidad. Recibe 3 armazones por el precio de uno.</p>
                <ul class="list solution__list">
                    <li class="list__item"><strong>Tecnología Flex-Rim:</strong> Cambio manual sin herramientas.</li>
                    <li class="list__item"><strong>Material Eco-Smart:</strong> Polímeros reciclados.</li>
                    <li class="list__item"><strong>Ahorro Real:</strong> Repuestos a costo $0.</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default solution
