import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';

const EditPost = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPostContent />
    </Suspense>
  );
};

const EditPostContent = React.lazy(() => import('./EditPostContent'));

export default EditPost;
