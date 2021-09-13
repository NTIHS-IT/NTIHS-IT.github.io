import React from 'react';
import cooperates from './data/cooperate';
import './sass/cooperates.sass';

const Cooperates = () => {
  return (
    <div className="cooperates">
      {cooperates.map((cooperate) => {
        return (
          <div key={cooperate.name} className="cooperate">
            <div className="cooperate-avatar">
              <img src={cooperate.avatar} />
            </div>
            <h2>{cooperate.name}</h2>
            <div className="links"></div>
          </div>
        );
      })}
    </div>
  );
};

export default Cooperates;
