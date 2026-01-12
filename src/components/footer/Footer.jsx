import './Footer.css'

const Footer = () => {
  return (
    <footer class="footer">
        <div class="container footer__container">
            <div class="footer__col">
                <a href="">
                    <img src="../src/assets/logo-remarco.png" alt="Logo ReMarco" class="footer__logo-img" />
                </a>
                <p class="footer__text">Óptica inteligente para gente real. Cambia tu mirada en segundos.</p>
                <div class="socials">
                    <a href="https://www.facebook.com" class="socials__link" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com" class="socials__link" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.twitter.com" class="socials__link" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>

            <div class="footer__col">
                <h4 class="footer__title">Enlaces</h4>
                <ul class="footer__menu">
                    <li><a href="#" class="footer__link">Soporte técnico</a></li>
                    <li><a href="#" class="footer__link">Blog de visión</a></li>
                    <li><a href="#" class="footer__link">Preguntas frecuentes</a></li>
                </ul>
            </div>

            <div class="footer__col">
                <h4 class="footer__title">Contáctanos</h4>
                <p class="footer__info"><i class="fa-solid fa-phone"></i> (593) 99 910 1795</p>
                <p class="footer__info"><i class="fa-solid fa-envelope"></i> michael.vargas@epn.edu.ec</p>
                <p class="footer__info"><i class="fa-solid fa-location-dot"></i> Av. 12 de Octubre, Quito</p>
            </div>
        </div>
        
        <div class="footer__bottom">
            <p class="footer__copy">© 2025 ReMarco. Todos los derechos reservados.</p>
        </div>
    </footer>
  )
}

export default Footer
