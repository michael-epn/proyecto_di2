import './Contact.css'
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <section id="contacto" className="contact">
        <motion.div className="container contact__container" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}>
            <div className="contact__content">
                <h2 className="contact__title">¿Tienes preguntas?</h2>
                <p className="contact__description">Estamos aquí para ayudarte a ver mejor el mundo.</p>

                <form action="#" className="form" method="POST">
                    <div className="form__group">
                        <input type="text" className="form__input" placeholder="Nombre completo" required aria-label="Nombre completo" />
                    </div>
                    <div className="form__group">
                        <input type="email" className="form__input" placeholder="Correo electrónico" required aria-label="Correo electrónico" />
                    </div>
                    <div className="form__group">
                        <input type="tel" className="form__input" placeholder="Teléfono" required aria-label="Teléfono" />
                    </div>
                    <div className="form__group">
                        <textarea className="form__textarea" placeholder="¿En qué podemos ayudarte?" rows="4" aria-label="Mensaje"></textarea>
                    </div>
                    <div className="form__group checkbox">
                        <label className="checkbox__label">
                            <input type="checkbox" required /> Acepto los términos y condiciones
                        </label>
                    </div>
                    <button type="submit" className="btn btn--primary">Enviar Mensaje</button>
                </form>
            </div>

            <div className="contact__map-wrapper">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.03063467406!2d-78.47879685!3d-0.1806532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a6802e9773b%3A0xc3f8c8713175860d!2sQuito%2C%20Ecuador!5e0!3m2!1sen!2sus!4v1703890000000!5m2!1sen!2sus" 
                    className="contact__map" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de ubicación de ReMarco">
                </iframe>
            </div>
        </motion.div>
    </section>
  )
}

export default Contact
