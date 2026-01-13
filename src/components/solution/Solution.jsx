import './Solution.css'
import packRemarco from "../../assets/pack-remarco.png"
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInUp } from '../../utils/animations.js';

const solution = () => {
  return (
    <section id="solucion" className="solution">
        <div className="container solution__container">
            <motion.div className="solution__visual" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInLeft}>
                <img src={packRemarco} alt="Kit ReMarco con 3 armazones" className="solution__img" loading="lazy" />
            </motion.div>
            <motion.div className="solution__content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} >
                <span className="tag">Innovación</span>
                <h2 className="solution__title">Te presentamos el <span className="text--highlight">Pack ReMarco</span></h2>
                <p className="solution__description">No vendemos un lente, vendemos tranquilidad. Recibe 3 armazones por el precio de uno.</p>
                <ul className="list solution__list">
                    <li className="list__item"><strong>Tecnología Flex-Rim:</strong> Cambio manual sin herramientas.</li>
                    <li className="list__item"><strong>Material Eco-Smart:</strong> Polímeros reciclados.</li>
                    <li className="list__item"><strong>Ahorro Real:</strong> Repuestos a costo $0.</li>
                </ul>
            </motion.div>
        </div>
    </section>
  )
}

export default solution
