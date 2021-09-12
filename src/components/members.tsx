import React from 'react';
import About from './about/about';
import memberList from './data/member.json';
import './sass/members.sass';

const Member = () => {
  return (
    <div className="members">
      {memberList.map((member) => {
        return (
          <div key={member.name} className="member">
            <h2>{member.position}</h2>
            <div className="avatar">
              <img src={member.discordAvatar} alt="他被消失啦呀!!"/>
            </div>
            <h3>{member.name}</h3>
            <p>{member.desc}</p>
            <About member={member} />
          </div>
        );
      })}
    </div>
  );
};

export default Member;
