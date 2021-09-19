import React from 'react';
import cooperates from './data/cooperate';
import cooperatesPeople from './data/cooperatePeople';
import cooperatesOrg from './data/cooperateOrg';
import Tilt from 'react-parallax-tilt';
import Links from './links/links';
import './sass/cooperates.sass';

const Cooperates = () => {
  return (
    <div className="cooperates">
      <div className='title'>
        組織
      </div>
      {cooperatesOrg.map((cooperatesOrg) => {
        return (
          <Tilt
            key={cooperatesOrg.name}
            className="cooperate"
            glareEnable={true}
            glareMaxOpacity={1}
            glareBorderRadius={'6px'}
          >
            <img src={cooperatesOrg.avatar} className="cooperate-avatar"/>
            <div className="content">
              <h2>{cooperatesOrg.name}</h2>
              <Links
                website={cooperatesOrg.website}
                ig={cooperatesOrg.ig}
                fb={cooperatesOrg.fb}
                blog={cooperatesOrg.blog}
              />
            </div>
          </Tilt>
        );
      })}
      <div className='title'>
        社團
      </div>
      {cooperates.map((cooperate) => {
        return (
          <Tilt
            key={cooperate.name}
            className="cooperate"
            glareEnable={true}
            glareMaxOpacity={1}
            glareBorderRadius={'6px'}
          >
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
          </Tilt>
        );
      })}
      <div className='title'>
        人物
      </div>
      {cooperatesPeople.map((cooperatePeople) => {
        return (
          <Tilt
            key={cooperatePeople.name}
            className="cooperate"
            glareEnable={true}
            glareMaxOpacity={1}
            glareBorderRadius={'6px'}
          >
            <img src={cooperatePeople.avatar} className="cooperate-avatar"/>
            <div className="content">
              <h2>{cooperatePeople.name}</h2>
              <Links
                website={cooperatePeople.website}
                ig={cooperatePeople.ig}
                fb={cooperatePeople.fb}
                blog={cooperatePeople.blog}
              />
            </div>
          </Tilt>
        );
      })}
    </div>
  );
};

export default Cooperates;
