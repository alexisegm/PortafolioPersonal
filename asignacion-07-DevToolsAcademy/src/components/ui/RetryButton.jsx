import React from 'react';

export const RetryButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-indigo-200/50 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
    >
      <span className="mr-2">🔄</span> Reintentar
    </button>
  );
};