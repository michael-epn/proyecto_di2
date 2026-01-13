import './Appdownload.css'
import appstore from "../../assets/App_Store_(iOS)-Badge-Logo.wine.svg"
import googleplay from "../../assets/Google_Play-Badge-Logo.wine.svg"
import appmockup from "../../assets/remarco-app-mockup.png"

const Appdownload = () => {
  return (
    <section id="app" className="app-download">
        <div className="container app-download__container">
            <div className="app-download__content" data-aos="fade-right">
                <span className="tag tag--highlight">Gestión Inteligente</span>
                <h2 className="app-download__title">Tu visión en la palma de tu mano</h2>
                <p className="app-download__description">
                    Con la App ReMarco, escanea tu rostro para probar modelos virtuales, gestiona la garantía de tus armazones y pide repuestos express.
                </p>
                <div className="app-download__badges">
                    <a href="https://apps.apple.com/us/iphone/today" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-delay="200">
                        <img src={appstore} alt="Descargar en App Store" className="app-download__badge" loading="lazy" />
                    </a>
                    <a href="https://play.google.com/store/games?device=windows&pli=1" target="_blank" rel="noopener noreferrer" data-aos="zoom-in" data-aos-delay="400">
                        <img src={googleplay} alt="Descargar en Google Play" className="app-download__badge" loading="lazy" />
                    </a>
                </div>
            </div>
            <div className="app-download__visual" data-aos="fade-up" data-aos-duration="1200" data-aos-anchor-placement="center-bottom">
                <img src={appmockup} alt="Interfaz de la App ReMarco" className="app-download__img" loading="lazy" />
            </div>
        </div>
    </section>
  )
}

export default Appdownload
