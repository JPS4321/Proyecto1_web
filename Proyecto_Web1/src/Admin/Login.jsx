import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Importar el archivo CSS

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (username === 'diego' && password === '123') {
      console.log('Usuario autenticado con éxito');
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
          <button className="button" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
