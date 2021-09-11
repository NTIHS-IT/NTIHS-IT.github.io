import React from 'react';
import Link from './link/link';
import './sass/members.sass';

const memberList = [
  {
    name: 'Young',
    discord: 'Young#0001',
    discordAvatar: 'https://cdn.discordapp.com/avatars/434364344424464385/896c5170ae059a6a08b30d77c7c4a843.webp?size=4096',
    position: '社長',
    githubName: 'Young-TW',
    github: 'https://github.com/Young-TW',
  },
];

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
            <div className="about">
              <Link
                src="fa-discord"
                title={member.discord}
              />
              <Link
                src="fa-github"
                title={member.githubName}
                href={member.github}
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
