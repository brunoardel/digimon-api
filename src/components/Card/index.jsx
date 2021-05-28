import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ props: { name, img, level } }) => (
  <div className="card">
    <img
      src={img}
      className="card__image card__image--fence"
      alt={name}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://i.ibb.co/LRVdr48/broken-image.jpg';
      }}
      width={320}
    />
    <div className="card__content">
      <div className="card__title">{name}</div>
      <p className="card__text">{level}</p>
      <Link className="btn btn--block card__btn" to={`/home/details/${name}`}>
        detalhes
      </Link>
    </div>
  </div>
);

export default Card;
