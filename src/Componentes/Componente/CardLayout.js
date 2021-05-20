import React from 'react';
import { Link } from 'react-router-dom';

const CardLayout = (props) => {
  /* console.log('props', props); */

  return (
    <div className="card CardDigimon">
      <div className="card-image">
        <figure className="image is-128x128">
          <img src={props.img} alt={props.name} />
        </figure>
      </div>

      <div className="media-content">
        <p className="title is-4">{props.name}</p>
        <p className="subtitle is-6">{props.level}</p>
        <Link
          className="has-text-info"
          to={`/Digimons/DetailDigimon/${props.name}`}
        >
          Ver mais detalhes
        </Link>
      </div>
    </div>
  );
};

export default CardLayout;
