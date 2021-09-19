import React, {FC} from 'react';
import Member from './memberType';
import Link from '../link/link';

const About: FC<{member: Member}> = ({member}) => {
  return (
    <div className="about">
      {
        member.discord ? (
          <Link
            src="fab fa-discord"
            title={member.discord}
          />
        ) : null
      }
      {
        member.github ? (
          <Link
            src="fab fa-github"
            href={member.github}
            click={true}
          />
        ) : null
      }
      {
        member.blog ? (
          <Link
            src="fas fa-rss"
            href={member.blog}
            click={true}
          />
        ) : null
      }
      {
        member.fb ? (
          <Link
            src="fab fa-facebook-square"
            href={member.fb}
            click={true}
          />
        ) : null
      }
      {
        member.ig ? (
          <Link
            src="fab fa-instagram"
            href={member.ig}
            click={true}
          />
        ) : null
      }
    </div>
  );
};

export default About;
