import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleUp } from '../../utils/animations.js'; // Ajusta la ruta si es necesario
import './Login.css';
import { data, NavLink, useNavigate } from 'react-router';
import logoremarco from "../../assets/logo-remarco.png"
import { authFirebase } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";

const Login = () => {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm()

  const handleLogin = async (data) => {
    const{email,password}= data
    try {
      await signInWithEmailAndPassword(authFirebase, email, password)
      navigate("/dashboard")
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  return (
    <section className="login__section">
      <div className="container login__container">
        
        <motion.div 
          className="login__card"
          variants={scaleUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="login__header" initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h2 variants={fadeInUp}>Bienvenido a</motion.h2>
            <li Link to="/landing">
              <motion.img src={logoremarco} alt="Logo ReMarco" variants={fadeInUp} />
            </li>

            <motion.p variants={fadeInUp} className="text__muted">
              Inicia sesión para gestionar tus pedidos.
            </motion.p>
          </motion.div>

          <motion.form 
            className="login__form"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit(handleLogin)}
          >
            
            <motion.div className="form__group" variants={fadeInUp}>
              <label htmlFor="email">Correo Electrónico</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="ejemplo@correo.com"
                {...register("email",{ required: true })} 
              />
              {errors.email && <span className="errors">El email es requerido</span>}
            </motion.div>

            <motion.div className="form__group" variants={fadeInUp}>
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

            <motion.div variants={fadeInUp} className="form__actions">
              <input type="submit" className="btn btn--primary btn__block" value="Ingresar"></input>
            </motion.div>

            <motion.div variants={fadeInUp} className="form__footer">
              <a href="#" className="forgot__pass">¿Olvidaste tu contraseña?</a>
              <p>¿No tienes cuenta? <span className="text--highlight"><NavLink to="/register">Regístrate</NavLink></span></p>
            </motion.div>

          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Login;