import React from 'react';
import cooperates from './data/cooperate';
import Links from './links/links';
import './sass/cooperates.sass';

const Cooperates = () => {
  return (
    <div className="cooperates">
      {cooperates.map((cooperate) => {
        return (
          <div key={cooperate.name} className="cooperate">
            <img src={cooperate.avatar} className="cooperate-avatar"/>
            <div className="content">
              <h2>{cooperate.name}</h2>
              <Links
                website={cooperate.website}
                ig={cooperate.ig}
                fb={cooperate.fb}
                blog={cooperate.blog}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cooperates;
