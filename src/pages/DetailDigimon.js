import React from 'react';
import PropTypes from 'prop-types';
import CardDetails from '../components/CardDetails';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import { getDigimons } from '../services/digimons';

class DetailDigimon extends React.Component {
  state = { Digimon: [], IsLoading: false };

  async componentDidMount() {
    this.setState({ IsLoading: true });
    const { name } = this.props.match.params;

    const Digimon = await getDigimons(
      `https://digimon-api.herokuapp.com/api/digimon/name/${name}`,
    );

    this.setState({ Digimon: Digimon[0], IsLoading: false });
  }

  render() {
    const { img, name, level } = this.state.Digimon;
    console.log(this.state.Digimon);
    return (
      <>
        <Navbar />
        <div className="container">
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

              <Link className="button is-info" to="/digimons">
                Voltar
              </Link>
            </div>
          </article>
        </div>
      </>
    );
  }
}

export default DetailDigimon;
