import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import useForm from './useForm'; // Import the useForm hook

const Login = () => {
    const navigate = useNavigate();

    const initialValues = { username: '', password: '' };

    const handleSubmit = (values) => {
        const { username, password } = values;

        if (username === 'diego' && password === '123') {
            console.log('Usuario autenticado con éxito');
            navigate('/Admin');
        } else {
            alert('Usuario o contraseña equivocado');
        }
    };

    const { values, handleChange, handleSubmit: handleFormSubmit } = useForm(initialValues, handleSubmit);

    return (
        <div className="container">
            <div className="card">
                <h1 className="title">Bienvenido</h1>
                <form onSubmit={handleFormSubmit} className="form">
                    <input
                        className="input"
                        type="text"
                        placeholder="Usuario"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    <input
                        className="input"
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <button className="button" type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
