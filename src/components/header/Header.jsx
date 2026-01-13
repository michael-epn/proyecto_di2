import './Header.css';
import { Link } from "react-router-dom";
import logoremarco from "../../assets/logo-remarco.png"
import Hero from '../hero/Hero';

const Header = () => {
  return (
    <header className="header">
        <nav className="nav">
            <div className="container nav__container">
                <a href="#" className="logo nav__logo" aria-label="Ir al inicio">
                    <img src={logoremarco} alt="Logo ReMarco" className="nav__logo-img" />
                </a>

                <ul className="nav__menu">
                    <li className="nav__item"><a href="#problema" className="nav__link">El Problema</a></li>
                    <li className="nav__item"><a href="#solucion" className="nav__link">La Solución</a></li>
                    <li className="nav__item"><a href="#app" className="nav__link">App</a></li>
                    <li className="nav__item"><a href="#contacto" className="nav__link">Contacto</a></li>
                </ul>

                <div className="nav__actions">
                    <li><Link to="/login" className="nav__link nav__link--login">Iniciar Sesión</Link></li>
                    <li><Link to="/register" className="btn btn--primary">Registrarse</Link></li>
                </div>
            </div>
        </nav>
        <Hero />
    </header>
  )
}

export default Header
