import React from 'react';

const Spinner = () => {
  return (
    <div className="loading-spinner">
      <div className="lds-ring">
        <div></div>
        <div></div>
      </div>
      <p>Buscando...</p>
    </div>
  );
};

export default Spinner;
