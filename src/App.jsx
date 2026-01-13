import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/notfound/NotFound";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { authFirebase } from '../src/firebase';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  useEffect(() => { 
    const unsubscribe = authFirebase.onAuthStateChanged((usuarioFirebase) => {
      setUser(usuarioFirebase);
      setLoading(false); 
    });
    return () => unsubscribe();
  }, []);

  if (loading) return <div>Cargando...</div>; 

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="dashboard" element={user ? <Dashboard /> : <Navigate to='/login' replace/>} />
        <Route path="login" element={user ? <Navigate to='/dashboard' replace/> : <Login/>} />
        <Route path="register" element={user ? <Navigate to="/dashboard" replace/> : <Register/>} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;