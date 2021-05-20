import React, { Component } from 'react';
import SearchContainer from './SearchContainer';
import DigimonsList from './../Componente/DigimonListLayout';
import SpinnerLayout from './../Componente/SpinnerLayout';

class MainDigimonContainer extends Component {
  state = { Digimons: [], IsLoading: false, inputData: '', errorMessage: '' };

  componentDidMount() {
    this.setState({ IsLoading: true });

    fetch('https://digimon-api.herokuapp.com/api/digimon')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ Digimons: data, IsLoading: false });
        console.log('Digimons ', this.state.Digimons);
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
    return <SpinnerLayout />;
  };

  render() {
    const { Digimons, IsLoading, errorMessage } = this.state;

    return (
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
        </div>
        {IsLoading
          ? this._renderSpinner()
          : Digimons.length > 0 && <DigimonsList Digimons={Digimons} />}
        {errorMessage && <p className="CardDigimon">{errorMessage}</p>}
      </div>
    );
  }
}

export default MainDigimonContainer;
