import './Contact.css'

const Contact = () => {
  return (
    <section id="contacto" class="contact">
        <div class="container contact__container">
            <div class="contact__content">
                <h2 class="contact__title">¿Tienes preguntas?</h2>
                <p class="contact__description">Estamos aquí para ayudarte a ver mejor el mundo.</p>
                    
                <form action="#" class="form" method="POST">
                    <div class="form__group">
                        <input type="text" class="form__input" placeholder="Nombre completo" required aria-label="Nombre completo" />
                    </div>
                    <div class="form__group">
                        <input type="email" class="form__input" placeholder="Correo electrónico" required aria-label="Correo electrónico" />
                    </div>
                    <div class="form__group">
                        <input type="tel" class="form__input" placeholder="Teléfono" required aria-label="Teléfono" />
                    </div>
                    <div class="form__group">
                        <textarea class="form__textarea" placeholder="¿En qué podemos ayudarte?" rows="4" aria-label="Mensaje"></textarea>
                    </div>
                    <div class="form__group checkbox">
                        <label class="checkbox__label">
                            <input type="checkbox" required /> Acepto los términos y condiciones
                        </label>
                    </div>
                    <button type="submit" class="btn btn--primary">Enviar Mensaje</button>
                </form>
            </div>
                
            <div class="contact__map-wrapper">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.03063467406!2d-78.47879685!3d-0.1806532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a6802e9773b%3A0xc3f8c8713175860d!2sQuito%2C%20Ecuador!5e0!3m2!1sen!2sus!4v1703890000000!5m2!1sen!2sus" 
                    class="contact__map" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Mapa de ubicación de ReMarco">
                </iframe>
            </div>
        </div>
    </section>
  )
}

export default Contact
