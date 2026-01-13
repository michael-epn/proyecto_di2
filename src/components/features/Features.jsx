import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Features.css';

const Features = () => {
  const el = useRef(null);

  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: [
        '¿Lentes rotos otra vez?',
        '¿Gastando una fortuna?',
        '¿Esperando semanas por repuestos?',
        '<span class="text--highlight">¿Por qué seguir sufriendo con la óptica tradicional?</span>'
      ],
      typeSpeed: 40,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      contentType: 'html', 
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="problema" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-header__title" style={{ minHeight: '3.6em' }}>
            <span ref={el}></span>
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
          style={{ paddingBottom: '3rem' }}
        >
          <SwiperSlide>
            <article className="card" style={{ height: '100%' }}>
              <div className="card__header">
                <i className="fa-solid fa-money-bill-wave card__icon"></i>
              </div>
              <h3 className="card__title">Costos Altos</h3>
              <p className="card__text">
                Si se rompe el armazón, te obligan a comprar todo nuevo. Es un gasto innecesario.
              </p>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="card" style={{ height: '100%' }}>
              <div className="card__header">
                <i className="fa-solid fa-hourglass-half card__icon"></i>
              </div>
              <h3 className="card__title">Tiempos de Espera</h3>
              <p className="card__text">
                Quedarte sin ver mientras esperas semanas por un repuesto es inaceptable hoy en día.
              </p>
            </article>
          </SwiperSlide>

          <SwiperSlide>
            <article className="card" style={{ height: '100%' }}>
              <div className="card__header">
                <i className="fa-solid fa-glasses card__icon"></i>
              </div>
              <h3 className="card__title">Fragilidad</h3>
              <p className="card__text">
                Los lentes costosos también se rompen. Necesitas un sistema diseñado para resistir.
              </p>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Features;