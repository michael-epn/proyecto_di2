import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { dbFirebase } from '../../firebase';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import './Catalogo.css';

const Catalogo = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(dbFirebase, "marcos"), orderBy("createdAt", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const framesData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setProductos(framesData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <section id="catalogo" className="catalogo container">
      <div className="catalogo__header">
        <h2 className="catalogo__title">Catálogo Oficial</h2>
        <p className="catalogo__subtitle">Diseños exclusivos creados recientemente.</p>
      </div>

      {loading ? (
        <p className="text-center">Cargando catálogo...</p>
      ) : (
        <motion.div 
           className="catalogo__grid"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={staggerContainer}
        >
          {productos.length === 0 ? (
             <div className="catalogo__empty">No hay marcos disponibles por el momento.</div>
          ) : (
            productos.map((producto) => (
              <motion.div key={producto.id} className="card" variants={fadeInUp}>
                <div className="card__figure">
                  <img 
                    src={producto.imagen} 
                    alt={producto.nombre} 
                    className="card__image"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/300x200?text=Sin+Imagen"; }}
                  />
                  <span className="card__badge">{producto.categoria}</span>
                </div>
                
                <div className="card__body">
                  <h3 className="card__title">{producto.nombre}</h3>
                  <p className="card__desc">{producto.descripcion}</p>
                  
                  <div className="card__meta-row">
                    <span className="card__tag">{producto.tipo}</span>
                    <span className="card__price">${producto.precio}</span>
                  </div>
                </div>

                <div className="card__footer">
                  <button className="btn btn--primary btn--full">
                    Comprar Ahora
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      )}
    </section>
  );
};

export default Catalogo;