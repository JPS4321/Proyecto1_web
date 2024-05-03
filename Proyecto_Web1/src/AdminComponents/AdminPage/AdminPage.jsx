import React from 'react';
import './AdminPage.css'; 
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    
    navigate('/');
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Bienvenido Administrador</h1>

        <div className="grid">
          <div className="button-group">
            <div className="subtitle">Ver Vista Visitante</div>
            <button className="butto" onClick={() => handleButtonClick('/Admin/view')}>Go</button>
          </div>
          <div className="button-group">
            <div className="subtitle">Crear Post</div>
            <button className="butto" onClick={() => handleButtonClick('/Admin/create')}>Go</button>
          </div>

          <div className="button-group">
            <div className="subtitle">Editar Post</div>
            <button className="butto" onClick={() => handleButtonClick('/Admin/edit')}>Go</button>
          </div>
          <div className="button-group">
            <div className="subtitle">Eliminar Post</div>
            <button className="butto" onClick={() => handleButtonClick('/Admin/delete')}>Go</button>
          </div>
        </div>

        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default AdminPage;
