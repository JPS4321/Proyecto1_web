import React, { Suspense } from 'react';

const DeletePostContent = React.lazy(() => import('./DeletePostContent'));

const DeletePost = () => {
  return (
    <Suspense fallback={<div>Loading Delete Post...</div>}>
      <DeletePostContent />
    </Suspense>
  );
};

export default DeletePost;
