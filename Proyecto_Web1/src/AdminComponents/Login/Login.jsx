import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const ret = () => {    
    navigate('/');
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Esta lógica simula una validación sencilla. En un entorno real, harías una petición al backend.
    if (username === 'diego' && password === '123') {
      console.log('Usuario autenticado con éxito');

      // Generamos un token de autenticación simulado. En un entorno real, este token vendría del backend.
      const authToken = 'someGeneratedToken'; // En producción, esto debería ser un token generado por el backend

      // Guardamos el token en localStorage
      localStorage.setItem('authToken', authToken);

      navigate('/Admin');
    } else {
      alert('Usuario o contraseña equivocado');
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Bienvenido</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            className="input"
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="butt" type="submit">Entrar</button>
          <button className="butt" onClick={ret}>Return</button>

        </form>
      </div>
    </div>
  );
};

export default Login;
