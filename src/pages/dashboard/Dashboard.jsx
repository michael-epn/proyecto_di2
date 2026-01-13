import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { authFirebase, dbFirebase } from '../../firebase.js';
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { fadeInUp, staggerContainer, fadeInLeft, scaleUp } from '../../utils/animations.js';
import './Dashboard.css';

const Dashboard = () => {
    const [frames, setFrames] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    useEffect(() => {
        const unsubscribe = onSnapshot(collection(dbFirebase, "marcos"), (snapshot) => {
            const framesData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setFrames(framesData);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await authFirebase.signOut();
            window.location.href = "/";
        } catch (error) {
            console.error("Error al salir:", error);
        }
    };

    const handleCreate = async (data) => {
        try {
            await addDoc(collection(dbFirebase, "marcos"), {
                ...data,
                createdAt: new Date()
            });
            reset();
            alert("¡Marco agregado con éxito!");
        } catch (error) {
            console.error("Error al crear:", error);
        }
    };

    return (
        <motion.div 
            className="dashboard-layout"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
        >
            <motion.header className="dashboard-header" variants={fadeInUp}>
                <div className="brand">
                    <h2>ReMarco<span className="text--highlight"></span></h2>
                </div>
                <div className="header-actions">
                    <span className="user-greeting">Hola, </span>
                    <button className="btn btn--outline btn--sm" onClick={handleLogout}>
                        Cerrar Sesión
                    </button>
                </div>
            </motion.header>

            <div className="container dashboard-content">
                <motion.section className="panel form-panel" variants={fadeInLeft}>
                    <div className="panel-header">
                        <h3>Nuevo Marco</h3>
                        <p>Añade un nuevo diseño al catálogo.</p>
                    </div>

                    <form className="admin-form" onSubmit={handleSubmit(handleCreate)}>
                        <div className="form-group">
                            <label>Nombre del Modelo</label>
                            <input 
                                type="text" 
                                placeholder="Ej. Urban Classic"
                                {...register("nombre", { required: true })}
                            />
                            {errors.nombre && <span className="error-msg">El nombre es requerido</span>}
                        </div>

                        <div className="form-group">
                            <label>URL de Imagen</label>
                            <input 
                                type="url" 
                                placeholder="https://..."
                                {...register("imagen", { required: true })}
                            />
                            {errors.imagen && <span className="error-msg">La imagen es requerida</span>}
                        </div>

                        <div className="form-group half">
                            <label>Precio ($)</label>
                            <input 
                                type="number" 
                                step="0.01"
                                placeholder="0.00"
                                {...register("precio", { required: true })}
                            />
                            {errors.precio && <span className="error-msg">Requerido</span>}
                        </div>

                        <div className="form-group">
                            <label>Descripción</label>
                            <textarea 
                                rows="3"
                                placeholder="Detalles del material, estilo..."
                                {...register("descripcion", { required: true })}
                            ></textarea>
                            {errors.descripcion && <span className="error-msg">La descripción es requerida</span>}
                        </div>

                        <motion.button 
                            className="btn btn--primary full-width"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                        >
                            Publicar Marco
                        </motion.button>
                    </form>
                </motion.section>

                <motion.section className="panel list-panel" variants={fadeInUp}>
                    <div className="panel-header">
                        <h3>Inventario Actual</h3>
                        <p>Gestiona los marcos visibles en la tienda.</p>
                    </div>

                    <div className="inventory-grid">
                        {frames.length === 0 ? (
                            <div className="empty-state">
                                <p>No hay marcos registrados todavía.</p>
                            </div>
                        ) : (
                            frames.map((frame) => (
                                <motion.div 
                                    key={frame.id} 
                                    className="inventory-card"
                                    variants={scaleUp}
                                >
                                    <div className="card-image" style={{backgroundImage: `url(${frame.imagen})`}}></div>
                                    <div className="card-info">
                                        <h4>{frame.nombre}</h4>
                                        <p className="price">${frame.precio}</p>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
};

export default Dashboard;