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

const PublicRoute = ({ user, children }) => {
  return user ? <Navigate to="/dashboard" replace /> : children;
};

const App = () => {
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
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    authFirebase.onAuthStateChanged((user)=>{
      setUser(user)
    })
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="login" element={<PublicRoute user={user}><Login /></PublicRoute>} />
        <Route path="register" element={<PublicRoute user={user}><Register /></PublicRoute>} />
        <Route path="dashboard" element={user ? <Dashboard user={user.email} /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;