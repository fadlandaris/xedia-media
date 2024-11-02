import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="border-t-4 border-primaryBlue border-solid border-8 h-12 w-12 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
