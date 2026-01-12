import './Appdownload.css'

const Appdownload = () => {
  return (
    <section id="app" class="app-download">
        <div class="container app-download__container">
            <div class="app-download__content">
                <span class="tag tag--highlight">Gestión Inteligente</span>
                <h2 class="app-download__title">Tu visión en la palma de tu mano</h2>
                <p class="app-download__description">
                    Con la App ReMarco, escanea tu rostro para probar modelos virtuales, gestiona la garantía de tus armazones y pide repuestos express.
                </p>
                <div class="app-download__badges">
                    <a href="https://apps.apple.com/us/iphone/today" target="_blank" rel="noopener noreferrer">
                        <img src="../src/assets/App_Store_(iOS)-Badge-Logo.wine.svg" alt="Descargar en App Store" class="app-download__badge" loading="lazy" />
                    </a>
                    <a href="https://play.google.com/store/games?device=windows&pli=1" target="_blank" rel="noopener noreferrer">
                        <img src="../src/assets/Google_Play-Badge-Logo.wine.svg" alt="Descargar en Google Play" class="app-download__badge" loading="lazy" />
                    </a>
                </div>
            </div>
            <div class="app-download__visual">
                <img src="../src/assets/remarco-app-mockup.png" alt="Interfaz de la App ReMarco" class="app-download__img" loading="lazy" />
            </div>
        </div>
    </section>
  )
}

export default Appdownload
