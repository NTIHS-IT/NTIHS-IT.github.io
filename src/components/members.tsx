import React from 'react';
import Link from './link/link';
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
              <img src={member.discordAvatar} />
            </div>
            <p>{member.desc}</p>
            <div className="about">
              <Link
                src="fab fa-discord"
                title={member.discord}
              />
              <Link
                src="fab fa-github"
                title={member.githubName}
                href={member.github}
                click={true}
              />
              <Link
                src="fas fa-rss"
                href={member.blog}
                click={true}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Member;
