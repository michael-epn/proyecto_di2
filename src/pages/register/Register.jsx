import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleUp } from '../../utils/animations.js'; 
import './Register.css';
import { data, NavLink, useNavigate } from 'react-router';
import logoremarco from "../../assets/logo-remarco.png";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useForm } from "react-hook-form";
import { authFirebase } from "../../firebase.js";
import { dbFirebase } from "../../firebase.js";
import {setDoc, doc} from 'firebase/firestore'

const Register = () => {
  
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm()

  const handleRegister = async (data) => {
    const {email, password} = data
    try {
      const newUserFirebase = await createUserWithEmailAndPassword(authFirebase, email, password)
      const userRegister = newUserFirebase.user
      console.log(userRegister)
      if (userRegister) {
        await setDoc(doc(dbFirebase, "Users", userRegister.uid), {
          email: userRegister.email,
          name: data.name,
          rol: "admin"
        })
      }
      navigate("/login")
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }
  return (
    <section className="register__section">
      <div className="container register__container">
        
        <motion.div 
          className="register__card"
          variants={scaleUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="register__header" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h2 variants={fadeInUp}>Únete a </motion.h2>
            <li Link to="/landing">
              <motion.img src={logoremarco} alt="Logo ReMarco" variants={fadeInUp} />
            </li>

            <motion.p variants={fadeInUp} className="text__muted">
              Crea tu cuenta y descubre tu estilo.
            </motion.p>
          </motion.div>

          <motion.form 
            className="register__form"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit(handleRegister)}
          >
            
            <motion.div className="form__group" variants={fadeInUp}>
              <label htmlFor="name">Nombre</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Tu nombre..."
                {...register("name",{ required: true })}
              />
              {errors.name && <span className="errors">El nombre es requerido</span>}
            </motion.div>

            <motion.div className="form__group" variants={fadeInUp}>
              <label htmlFor="email">Correo Electrónico</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="ejemplo@correo.com"
                {...register("email",{ required: true })}
              />
              {errors.email && <span className="errors">El correo es requerido</span>}
            </motion.div>

            <div className="form__row">
              <motion.div className="form__group half-width" variants={fadeInUp}>
                <label htmlFor="password">Contraseña</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••"
                  {...register("password",{ required: true })}
                />
                {errors.password && <span className="errors">La contraseña es requerida</span>}
              </motion.div>

              <motion.div className="form__group half-width" variants={fadeInUp}>
                <label htmlFor="confirmPassword">Confirmar</label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  name="confirmPassword" 
                  placeholder="••••••••"
                  {...register("confirmPassword",{ required: true })} 
                />
                {errors.confirmPassword && <span className="errors">La confirmación es requerida</span>}
              </motion.div>
            </div>

            <motion.div className="form__check" variants={fadeInUp}>
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">Acepto los <span className="text--highlight">Términos y Condiciones</span></label>
            </motion.div>

            <motion.div variants={fadeInUp} className="form__actions">
              <input type="submit" className="btn btn--primary btn__block" value="Registrarse"></input>
            </motion.div>

            <motion.div variants={fadeInUp} className="form__footer">
              <p>¿Ya tienes cuenta? <span className="text--highlight"><NavLink to="/login">Inicia Sesión</NavLink></span></p>
            </motion.div>

          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;