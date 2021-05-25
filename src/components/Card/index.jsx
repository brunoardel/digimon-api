import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  /* console.log('props', props); */

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-128x128">
          <img src={props.img} alt={props.name} />
        </figure>
      </div>

      <div className="card-content">
        <p className="title is-4">{props.name}</p>
        <p className="subtitle is-6">{props.level}</p>
        <Link
          className="has-text-info"
          to={`/digimons/detail_digimon/${props.name}`}
        >
          Ver mais detalhes
        </Link>
      </div>
    </div>
  );
};

export default Card;
