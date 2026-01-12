import './Gallery.css'

const Gallery = () => {
  return (
    <section id="galeria" class="gallery">
        <div class="container">
            <div class="section-header">
                <h2 class="section-header__title">Estilo para cada personalidad</h2>
                <p class="section-header__subtitle">Explora nuestra colección de armazones intercambiables.</p>
            </div>
            <div class="gallery__grid">
                <div class="gallery__item">
                    <img src="../src/assets/urbano.png" alt="Estilo Urbano" loading="lazy" />
                    <div class="gallery__overlay">
                        <h3>Urbano</h3>
                        <p>Para la vida en movimiento</p>
                    </div>
                </div>
                <div class="gallery__item">
                    <img src="../src/assets/clasico.png" alt="Estilo Clásico" loading="lazy" />
                    <div class="gallery__overlay">
                        <h3>Clásico</h3>
                        <p>Para el estilo atemporal</p>
                    </div>
                </div>
                <div class="gallery__item">
                    <img src="../src/assets/deportivo.png" alt="Estilo Deportivo" loading="lazy" />
                    <div class="gallery__overlay">
                        <h3>Deportivo</h3>
                        <p>Para el entorno activo</p>
                    </div>
                </div>
                <div class="gallery__item">
                    <img src="../src/assets/minimal.png" alt="Estilo Minimal" loading="lazy" />
                    <div class="gallery__overlay">
                        <h3>Minimal</h3>
                        <p>Para la elegancia sencilla</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery
