import './Gallery.css'
import urbano from "../../assets/urbano.png"
import clasico from "../../assets/clasico.png"
import deportivo from "../../assets/deportivo.png"
import minimal from "../../assets/minimal.png"
import { motion } from 'framer-motion';
import { staggerContainer, scaleUp, fadeInUp } from '../../utils/animations.js';
const Gallery = () => {
  return (
    <section id="galeria" className="gallery">
        <div className="container">
            <div className="section-header">
                <h2 className="section-header__title">Estilo para cada personalidad</h2>
                <p className="section-header__subtitle">Explora nuestra colección de armazones intercambiables.</p>
            </div>
            <motion.div className="gallery__grid" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
                <motion.div key={urbano} className="gallery__item" variants={scaleUp}>
                    <img src={urbano} alt="Estilo Urbano" loading="lazy" />
                    <div className="gallery__overlay">
                        <h3>Urbano</h3>
                        <p>Para la vida en movimiento</p>
                    </div>
                </motion.div>
                <motion.div key={clasico} className="gallery__item" variants={scaleUp}>
                    <img src={clasico} alt="Estilo Clásico" loading="lazy" />
                    <div className="gallery__overlay">
                        <h3>Clásico</h3>
                        <p>Para el estilo atemporal</p>
                    </div>
                </motion.div>
                <motion.div key={deportivo} className="gallery__item" variants={scaleUp}>
                    <img src={deportivo} alt="Estilo Deportivo" loading="lazy" />
                    <div className="gallery__overlay">
                        <h3>Deportivo</h3>
                        <p>Para el entorno activo</p>
                    </div>
                </motion.div>
                <motion.div key={minimal} className="gallery__item" variants={scaleUp}>
                    <img src={minimal} alt="Estilo Minimal" loading="lazy" />
                    <div className="gallery__overlay">
                        <h3>Minimal</h3>
                        <p>Para la elegancia sencilla</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    </section>
  )
}

export default Gallery
