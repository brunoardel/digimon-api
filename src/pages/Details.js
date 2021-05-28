import React from 'react';
import CardDetails from '../components/CardDetails';
import Navbar from '../components/Navbar';
import Spinner from '../components/Spinner';
import { getDigimons } from '../services/digimons';

class Details extends React.Component {
  state = { Digimon: [], IsLoading: true };

  async componentDidMount() {
    this.setState({ IsLoading: true });
    const { name } = this.props.match.params;

    const Digimon = await getDigimons(
      `https://digimon-api.herokuapp.com/api/digimon/name/${name}`,
    );

    this.setState({ Digimon: Digimon[0], IsLoading: false });
  }

  render() {
    const { Digimon, IsLoading } = this.state;

    return (
      <>
        <Navbar />
        <div className="container">
          {IsLoading && <Spinner />}
          {!IsLoading && Digimon && <CardDetails {...this.state.Digimon} />}
        </div>
      </>
    );
  }
}

export default Details;
