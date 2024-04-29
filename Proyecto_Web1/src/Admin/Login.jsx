import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from './ueForm';
import './Login.css'; 

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = ({ username, password }) => {
    if (username === 'diego' && password === '123') {
      console.log('Usuario autenticado con éxito');
      navigate('/Admin');
    } else {
      alert('Usuario o contraseña equivocados');
    }
  };

  const { formState, handleChange, handleSubmit } = useForm(
    { username: '', password: '' },
    onSubmit
  );

  const { username, password } = formState;

  return (
    <div className="container">
      <div class="card">
        <h1 class="title">Bienvenido</h1>
        <form onSubmit={handleSubmit} class="form">
          <input
            class="input"
            type="text"
            name="username"
            placeholder="Usuario"
            value={username}
            onChange={handleChange}
          />
          <input
            class="input"
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={handleChange}
          />
          <button class="button" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
