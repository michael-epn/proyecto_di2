import './Footer.css'
import logoremarco from "../../assets/logo-remarco.png"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container footer__container">
            <div className="footer__col">
                <a href="">
                    <img src={logoremarco} alt="Logo ReMarco" className="footer__logo-img" />
                </a>
                <p className="footer__text">Óptica inteligente para gente real. Cambia tu mirada en segundos.</p>
                <div className="socials">
                    <a href="https://www.facebook.com" className="socials__link" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com" className="socials__link" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.twitter.com" className="socials__link" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
                </div>
            </div>

            <div className="footer__col">
                <h4 className="footer__title">Enlaces</h4>
                <ul className="footer__menu">
                    <li><a href="#" className="footer__link">Soporte técnico</a></li>
                    <li><a href="#" className="footer__link">Blog de visión</a></li>
                    <li><a href="#" className="footer__link">Preguntas frecuentes</a></li>
                </ul>
            </div>

            <div className="footer__col">
                <h4 className="footer__title">Contáctanos</h4>
                <p className="footer__info"><i className="fa-solid fa-phone"></i> (593) 99 910 1795</p>
                <p className="footer__info"><i className="fa-solid fa-envelope"></i> michael.vargas@epn.edu.ec</p>
                <p className="footer__info"><i className="fa-solid fa-location-dot"></i> Av. 12 de Octubre, Quito</p>
            </div>
        </div>

        <div className="footer__bottom">
            <p className="footer__copy">© 2025 ReMarco. Todos los derechos reservados.</p>
        </div>
    </footer>
  )
}

export default Footer
