import './Header.css';
import { Link } from "react-router-dom";
import logoremarco from "../src/assets/logo-remarco.png"
import lenteshero from "../src/assets/lentes-remarco-hero.png"

const Header = () => {
  return (
    <header class="header">
        <nav class="nav">
            <div class="container nav__container">
                <a href="#" class="logo nav__logo" aria-label="Ir al inicio">
                    <img src={logoremarco} alt="Logo ReMarco" class="nav__logo-img" />
                </a>

                <ul class="nav__menu">
                    <li class="nav__item"><a href="#problema" class="nav__link">El Problema</a></li>
                    <li class="nav__item"><a href="#solucion" class="nav__link">La Solución</a></li>
                    <li class="nav__item"><a href="#app" class="nav__link">App</a></li>
                    <li class="nav__item"><a href="#contacto" class="nav__link">Contacto</a></li>
                </ul>
                
                <div class="nav__actions">
                    <li><Link to="/login" class="nav__link nav__link--login">Iniciar Sesión</Link></li>
                    <li><Link to="/register" class="btn btn--primary">Registrarse</Link></li>
                </div>
            </div>
        </nav>

        <section class="hero">
            <div class="container hero__container">
                <div class="hero__content">
                    <h1 class="hero__title">
                        Más que lentes, un sistema de <span class="text--highlight">continuidad visual</span>.
                    </h1>
                    <p class="hero__description">
                        Olvídate de pagar fortunas cuando se rompen tus gafas. Con ReMarco, cambia el armazón en segundos sin herramientas.
                    </p>
                    <div class="hero__actions">
                        <a href="#catalogo" class="btn btn--primary">Ver Packs</a>
                        <a href="#demo" class="btn btn--outline">Ver Video</a>
                    </div>
                </div>
                <div class="hero__visual">
                    <img src={lenteshero} alt="Lentes ReMarco flexibles y modernos" class="hero__img" />
                </div>
            </div>
        </section>
    </header>
  )
}

export default Header
