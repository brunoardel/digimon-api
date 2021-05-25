import React from 'react';
import PropTypes from 'prop-types';
import CardDetails from '../components/CardDetails';
import Navbar from '../components/Navbar';

class DetailDigimon extends React.Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string,
    }),
  };

  state = { digimon: {} };

  _fetch = ({ name }) => {
    console.log('fetch');
    fetch(`https://digimon-api.herokuapp.com/api/digimon/name/${name}`)
      .then((res) => res.json())
      .then((data) => {
        let digimon = data[0];
        this.setState({ digimon });
      });
  };

  componentDidMount() {
    const { name } = this.props.match.params;
    this._fetch({ name });
  }

  render() {
    console.log('this.state.digimon', this.state.digimon);
    const { img, name, level } = this.state.digimon;

    return (
      <div>
        <Navbar />
        <CardDetails img={img} level={level} name={name} />
      </div>
    );
  }
}

export default DetailDigimon;
