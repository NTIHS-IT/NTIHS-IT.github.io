import React, {FC} from 'react';
import './link.sass';

const Link: FC<{
  src: string,
  title: string,
  click?: boolean,
  href?: string
}> = ({src, title, click = false, href = ''}) => {
  return (
    click ? (
      <a id="link" href={href}>
        <li className={`fab ${src}`}></li>
      </a>
    ) : (
      <div
        id="link"
        className="copy"
        onClick={() => {
          navigator.clipboard.writeText(title);
        }}
      >
        <li className={`fab ${src}`}></li>
      </div>
    )
  );
};

export default Link;
