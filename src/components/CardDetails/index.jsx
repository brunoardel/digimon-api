import React from 'react';
import { Link } from 'react-router-dom';

function CardDetails(props) {
  const { img, name, level } = props;

  return (
    <div className="container-fluid t_container ">
      <div className="columns">
        <div className="column">
          <figure className="image is-4by3">
            <img src={img} alt={name} />
          </figure>
        </div>
        <div className="column">
          <h2>Informações Gerais</h2>
          <hr />
          <h3>Nome: {name} </h3>
          <br />
          <p>Nivel: {level}</p>
          <p></p>
          <Link to="/digimons">Voltar</Link>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
