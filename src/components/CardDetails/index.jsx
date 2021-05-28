import React from 'react';
import { Link } from 'react-router-dom';

const CardDetails = ({ name, img, level }) => (
  <article className="detail__article">
    <img
      src={img}
      alt={name}
      className="card__image card__image--fence"
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = 'https://i.ibb.co/LRVdr48/broken-image.jpg';
      }}
      width={500}
    />
    <div className="detail__texts">
      <h3 className="heading post-category">Detalhes</h3>
      <h1 className="title post-title">Nome: {name}</h1>
      <p className="post-excerpt">Nível: {level}</p>
      <br />

      <Link className="button is-info" to="/home">
        Voltar
      </Link>
    </div>
  </article>
);

export default CardDetails;
