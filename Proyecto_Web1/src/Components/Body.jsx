import React, { Suspense } from 'react';
import './Body.css';
import Sidebar from './Sidebar';

const Conte = React.lazy(() => import('./Conte')); 

function Body() {
  return (
    <div className="main-container">
      <Suspense fallback={<div>Loading content...</div>}>
        <Conte />
      </Suspense>
      <Sidebar />
    </div>
  );
}

export default Body;
