import React from 'react';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      
      <style>
        {`
          .loading-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 50vh;
          }

          .spinner {
            width: 40px;
            height: 40px;
            border: 8px solid #f3f3f3;
            border-top: 8px solid #000;
            border-radius: 50%;
            animation: spin 2s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
