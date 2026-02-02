import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logoremarco from "../../assets/logo-remarco.png";
import { authFirebase, dbFirebase } from '../../firebase.js';
import { addDoc, collection, deleteDoc, doc, updateDoc, onSnapshot, orderBy, query } from "firebase/firestore";
import { fadeInUp, staggerContainer, fadeInLeft } from '../../utils/animations.js';
import './Dashboard.css';

const Dashboard = ({ user }) => {
    const [frames, setFrames] = useState([]);
    const [editingId, setEditingId] = useState("");
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        const q = query(collection(dbFirebase, "marcos"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const framesData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setFrames(framesData);
        });
        return () => unsubscribe();
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.style.filter = 'none';
            document.documentElement.classList.remove('dark-mode');
        } else {
            document.documentElement.style.filter = 'invert(1)';
            document.documentElement.classList.add('dark-mode');
        }
        setIsDarkMode(!isDarkMode);
    };

    const handleLogout = async () => {
        try {
            await authFirebase.signOut();
            window.location.href = "/";
        } catch (error) {
            console.error(error);
        }
    };

    const handleSave = async (data) => {
        try {
            const frameData = {
                ...data,
                precio: parseFloat(data.precio) || 0,
                createdAt: new Date()
            };

            if (editingId) {
                await updateDoc(doc(dbFirebase, "marcos", editingId), frameData);
                toast.success("Marco actualizado");
                setEditingId("");
            } else {
                await addDoc(collection(dbFirebase, "marcos"), frameData);
                toast.success("Marco creado");
            }
            reset({ nombre: '', categoria: '', tipo: '', imagen: '', precio: '', descripcion: '' });
        } catch (error) {
            console.error(error);
            toast.error("Error al guardar");
        }
    };

    const handleEdit = (frame) => {
        setEditingId(frame.id);
        setValue("nombre", frame.nombre);
        setValue("categoria", frame.categoria);
        setValue("tipo", frame.tipo);
        setValue("imagen", frame.imagen);
        setValue("precio", frame.precio);
        setValue("descripcion", frame.descripcion);
    };

    const handleDelete = async (id) => {
        if (window.confirm("¿Eliminar marco?")) {
            try {
                await deleteDoc(doc(dbFirebase, "marcos", id));
                toast.warn("Eliminado");
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <motion.div 
            className="dashboard"
            initial="hidden" animate="visible" variants={staggerContainer}
        >
            <ToastContainer position="top-right" autoClose={2000} />
            
            <header className="dashboard__header">
                <div className="dashboard__brand">
                    <li Link to="/landing">
                        <img src={logoremarco} alt="Logo" />
                    </li>
                </div>
                <div className="dashboard__actions">
                    <h2>Hola <span>{user}</span></h2>
                    <button className="btn btn--outline" onClick={toggleTheme}>
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                    <button className="btn btn--outline btn--sm" onClick={handleLogout}>
                        Salir
                    </button>
                </div>
            </header>

            <div className="dashboard__container">
                <motion.section className="panel panel--form" variants={fadeInLeft}>
                    <div className="panel__header">
                        <h3 className="panel__title">{editingId ? "Editar" : "Nuevo"}</h3>
                    </div>

                    <form className="form" onSubmit={handleSubmit(handleSave)}>
                        <div className="form__group">
                            <label className="form__label">Modelo</label>
                            <input className="form__input" type="text" {...register("nombre", { required: true })} />
                            {errors.nombre && <span className="form__error">*</span>}
                        </div>

                        <div className="form__row">
                            <div className="form__group">
                                <label className="form__label">Categoría</label>
                                <select className="form__select" {...register("categoria", { required: true })}>
                                    <option value="">...</option>
                                    <option value="urbano">Urbano</option>
                                    <option value="clasico">Clásico</option>
                                    <option value="minimalista">Minimalista</option>
                                    <option value="deportivo">Deportivo</option>
                                </select>
                            </div>
                            <div className="form__group">
                                <label className="form__label">Material</label>
                                <select className="form__select" {...register("tipo", { required: true })}>
                                    <option value="">...</option>
                                    <option value="plastico">Plástico</option>
                                    <option value="metal">Metal</option>
                                    <option value="aluminio">Aluminio</option>
                                </select>
                            </div>
                        </div>

                        <div className="form__row">
                            <div className="form__group">
                                <label className="form__label">Imagen URL</label>
                                <input className="form__input" type="url" {...register("imagen", { required: true })} />
                            </div>
                            <div className="form__group">
                                <label className="form__label">Precio</label>
                                <input className="form__input" type="number" step="0.01" {...register("precio", { required: true })} />
                            </div>
                        </div>

                        <div className="form__group">
                            <label className="form__label">Descripción</label>
                            <textarea className="form__textarea" rows="2" {...register("descripcion", { required: true })}></textarea>
                        </div>

                        <button className="btn btn--primary form__submit" type="submit">
                            {editingId ? "Actualizar" : "Guardar"}
                        </button>
                        
                        {editingId && (
                            <button type="button" className="btn btn--outline full-width" onClick={() => { setEditingId(""); reset(); }}>
                                Cancelar
                            </button>
                        )}
                    </form>
                </motion.section>

                <motion.section className="panel panel--list" variants={fadeInUp}>
                    <div className="panel__header">
                        <h3 className="panel__title">Inventario ({frames.length})</h3>
                    </div>

                    <div className="grid">
                        <AnimatePresence>
                            {frames.length === 0 ? (
                                <div className="grid__empty"><p>Vacío</p></div>
                            ) : (
                                frames.map((frame) => (
                                    <motion.div 
                                        key={frame.id} 
                                        className="card"
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                    >
                                        <div className="card__figure">
                                            <img 
                                                src={frame.imagen} 
                                                alt={frame.nombre} 
                                                className="card__image"
                                                onError={(e) => { e.target.src = "https://via.placeholder.com/300x200?text=No+Image"; }} 
                                            />
                                            <span className="card__badge">{frame.categoria}</span>
                                        </div>
                                        <div className="card__body">
                                            <h4 className="card__title">{frame.nombre}</h4>
                                            <p className="card__desc">{frame.descripcion}</p>
                                            <div className="card__meta-row">
                                                <span className="card__tag">{frame.tipo}</span>
                                                <span className="card__price">${frame.precio}</span>
                                            </div>
                                        </div>
                                        <div className="card__footer">
                                            <button className="btn btn--edit btn--xs" onClick={() => handleEdit(frame)}>
                                                Editar
                                            </button>
                                            <button className="btn btn--delete btn--xs" onClick={() => handleDelete(frame.id)}>
                                                Borrar
                                            </button>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </AnimatePresence>
                    </div>
                </motion.section>
            </div>
        </motion.div>
    );
};

export default Dashboard;