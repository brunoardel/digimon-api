import React from 'react';
import CardDigimon from './CardLayout';

const DigimonList = (props) => {
  return (
    <div className="container DigimonList-item">
      {props.Digimons.map((digimon, i) => {
        return (
          <div key={i} className="DigimonList">
            <CardDigimon
              name={digimon.name}
              img={digimon.img}
              level={digimon.level}
            />
          </div>
        );
      })}
    </div>
  );
};

export default DigimonList;
