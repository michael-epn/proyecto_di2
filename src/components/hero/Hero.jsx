import './Hero.css'
import lenteshero from "../../assets/lentes-remarco-hero.png"
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, scaleUp } from '../../utils/animations.js';
const Hero = () => {
  return (
    <section className="hero">
        <div className="container hero__container">
            <motion.div className="hero__content" initial="hidden" animate="visible" variants={fadeInUp}>
                <h1 className="hero__title">
                    Más que lentes, un sistema de <span className="text--highlight">continuidad visual</span>.
                </h1>
                <p className="hero__description">
                    Olvídate de pagar fortunas cuando se rompen tus gafas. Con ReMarco, cambia el armazón en segundos sin herramientas.
                </p>
                <motion.div className="hero__actions" variants={fadeInUp}>
                    <a href="#catalogo" className="btn btn--primary">Ver Packs</a>
                    <a href="#demo" className="btn btn--outline">Ver Video</a>
                </motion.div>
            </motion.div>
            <motion.div className="hero__visual" initial="hidden" animate="visible" variants={scaleUp}>
                <img src={lenteshero} alt="Lentes ReMarco flexibles y modernos" className="hero__img" />
            </motion.div>
        </div>
    </section>
  )
}

export default Hero
