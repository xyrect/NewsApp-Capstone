import React from 'react';

const EmptyState = ({ message = 'No articles or news found.', children }) => {
  return (
    <div className="text-center py-4">
      <p className="text-gray-500">{message}</p>
      {children && <div className="mt-2">{children}</div>}
    </div>
  );
};

export default EmptyState;
