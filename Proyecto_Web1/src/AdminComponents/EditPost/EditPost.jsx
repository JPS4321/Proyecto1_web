import React, { Suspense } from 'react';

const EditPost = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPostContent />
    </Suspense>
  );
};

const EditPostContent = React.lazy(() => import('./EditPostContent'));

export default EditPost;
