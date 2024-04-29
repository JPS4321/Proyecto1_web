import React from 'react';
import './AdminPage.css'; // Import CSS for styling
import { useNavigate } from 'react-router-dom';

function AdminPage() {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <div class="card">
        <h1 class="title">Bienvenido</h1>

        <div class="grid">
          {/* Row 1 */}
          <div class="button-group">
            <div class="subtitle">Ver Blog Actual</div>
            <button class="button" onClick={() => handleButtonClick('/admin/view')}>Go</button>
          </div>
          <div class="button-group">
            <div class="subtitle">Crear Post</div>
            <button class="button" onClick={() => handleButtonClick('/option2')}>Go</button>
          </div>

          {/* Row 2 */}
          <div class="button-group">
            <div class="subtitle">Editar Post</div>
            <button class="button" onClick={() => handleButtonClick('/option3')}>Go</button>
          </div>
          <div class="button-group">
            <div class="subtitle">Eliminar Post</div>
            <button class="button" onClick={() => handleButtonClick('/option4')}>Go</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
