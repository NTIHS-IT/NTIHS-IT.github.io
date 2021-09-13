import React, {FC} from 'react';
import LinksType from './linksType';
import './links.sass';

const Links: FC<LinksType> = ({blog, website, ig, fb}) => {
  return (
    <div className="links">
      {
        blog ? (
          <a className="fas fa-rss" href={blog}></a>
        ) : null
      }
      {
        website ? (
          <a className="fa-lg fas fa-globe" href={website}></a>
        ) : null
      }
      {
        ig ? (
          <a className="fab fa-instagram" href={ig}></a>
        ) : null
      }
      {
        fb ? (
          <a className="fab fa-facebook-square" href={fb}></a>
        ) : null
      }
    </div>
  );
};

export default Links;
