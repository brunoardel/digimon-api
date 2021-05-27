import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Notification from '../components/Notification';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { getDigimons } from '../services/digimons';
import { Link } from 'react-router-dom';

class Home extends Component {
  state = { Digimons: [], IsLoading: false, inputData: '', errorMessage: '' };

  async componentDidMount() {
    this.setState({ IsLoading: true });

    const digimons = await getDigimons(
      'https://digimon-api.herokuapp.com/api/digimon',
    );

    this.setState({ Digimons: digimons, IsLoading: false });
  }

  handleChange = (e) => {
    this.setState({ inputData: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ IsLoading: true });

    const result = this.state.Digimons.find(
      (digimon) => digimon.name === this.state.inputData,
    );

    if (!result) {
      this.setState({
        IsLoading: false,
        errorMessage: 'Digimon não encontrado',
      });

      return;
    }

    if (result) {
      this.setState({
        Digimons: [result],
        IsLoading: false,
        errorMessage: '',
      });

      return;
    }
  };

  handleSearch = async () => {
    this.setState({ IsLoading: true, errorMessage: '' });

    const digimons = await getDigimons(
      'https://digimon-api.herokuapp.com/api/digimon',
    );

    this.setState({
      Digimons: digimons,
      IsLoading: false,
      errorMessage: '',
      inputData: '',
    });
  };

  renderSpinner = () => {
    return <Spinner />;
  };

  render() {
    const { Digimons, IsLoading, inputData, errorMessage } = this.state;

    return (
      <>
        <Navbar />
        <Notification />
        <h1 className="title">Digimon Api</h1>
        <br />
        <div>
          <div className="container">
            <form
              className="field is-grouped form-search"
              onSubmit={this.handleSubmit}
            >
              <p className="control is-expanded">
                <input
                  className="input"
                  type="search"
                  placeholder="Insira o nome aqui..."
                  value={inputData}
                  onChange={this.handleChange}
                />
              </p>
              <p className="control">
                <button className="button is-info" onClick={this.handleSubmit}>
                  Pesquisar
                </button>
              </p>
            </form>

            <div className="containerCards">
              {errorMessage && (
                <span>
                  <p className="ErrorMessage">{errorMessage}</p>
                  <button
                    className="button is-outlined ButtonReload"
                    onClick={this.handleSearch}
                  >
                    Recarregar lista
                  </button>
                </span>
              )}
              {IsLoading && this.renderSpinner()}
              {!errorMessage && Digimons.length > 0 && (
                <ul className="cards">
                  {Digimons.map((digimon, i) => (
                    <li className="cards__item" key={i}>
                      <div className="card">
                        <img
                          src={digimon.img}
                          className="card__image card__image--fence"
                          alt={digimon.name}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              'https://i.ibb.co/LRVdr48/broken-image.jpg';
                          }}
                          width={320}
                        />
                        <div className="card__content">
                          <div className="card__title">{digimon.name}</div>
                          <p className="card__text">{digimon.level}</p>
                          {/* <button className="btn btn--block card__btn">
                            detalhes
                          </button> */}
                          <Link
                            className="btn btn--block card__btn"
                            to={`/digimons/detail_digimon/${digimon.name}`}
                          >
                            detalhes
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
