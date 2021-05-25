import React from 'react';

const Notification = () => {
  return (
    <div className="container is-fullhd ">
      <div className="notification App-container">
        <strong>Digimon Api</strong> - Utilizando API disponivel{' '}
        <a
          rel="noopener noreferrer"
          href="https://digimon-api.herokuapp.com/api/digimon"
          target="_blank"
        >
          aqui
        </a>
      </div>
    </div>
  );
};

export default Notification;
