import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ img, name, level }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-128x128">
        <img src={img} alt={name} />
      </figure>
    </div>

    <div className="card-content">
      <p className="title is-4">{name}</p>
      <p className="subtitle is-6">{level}</p>
      <Link className="has-text-info" to={`/digimons/detail_digimon/${name}`}>
        Ver mais detalhes
      </Link>
    </div>
  </div>
);

export default Card;
