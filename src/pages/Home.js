import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Notification from '../components/Notification';
import Spinner from '../components/Spinner';
import Card from '../components/Card';
import Footer from '../components/Footer';

class Home extends Component {
  state = { Digimons: [], IsLoading: false, inputData: '', errorMessage: '' };

  componentDidMount() {
    this.setState({ IsLoading: true });

    fetch('https://digimon-api.herokuapp.com/api/digimon')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ Digimons: data, IsLoading: false });
        console.log('Digimons ', this.state.Digimons);
      })
      .then((res) => {
        const result = this.state.Digimons.filter(
          (digimon) => digimon.name === 'Motimon',
        );
        console.log('encontrado', result);
      });
  }

  _handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ inputData: e.target.value });
  };

  _hanldeSubmit = (e) => {
    e.preventDefault();
    this.setState({ IsLoading: true });

    const { inputData } = this.state;

    fetch(`https://digimon-api.herokuapp.com/api/digimon/name/${inputData}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        /*  console.log(data.ErrorMsg); */

        if (data.ErrorMsg) {
          console.log('caiu no erro: ' + data.ErrorMsg);
          this.setState({ errorMessage: data.ErrorMsg });
        }

        this.setState({ Digimons: data, IsLoading: false });
        console.log('Pesquisa ', this.state.Digimons);
      });
  };

  _renderSpinner = () => {
    return <Spinner />;
  };

  render() {
    const { Digimons, IsLoading, errorMessage } = this.state;

    return (
      <>
        <Navbar />
        <Notification />
        <h1 className="title">Digimon Api</h1>
        <br />
        <div>
          <div className="container">
            <form className="field is-grouped " onSubmit={this._hanldeSubmit}>
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="Insira o nome aqui..."
                  onChange={this._handleChange}
                />
              </p>
              <p className="control">
                <button className="button is-info" onClick={this._hanldeSubmit}>
                  Pesquisar
                </button>
              </p>
            </form>

            <div className="containerCards">
              {IsLoading
                ? this._renderSpinner()
                : Digimons.length > 0 && (
                    <div className="cards">
                      {Digimons.map((digimon, i) => (
                        <Card
                          key={i}
                          name={digimon.name}
                          img={digimon.img}
                          level={digimon.level}
                        />
                      ))}
                    </div>
                  )}
              {errorMessage && <p className="CardDigimon">{errorMessage}</p>}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
