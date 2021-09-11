import React, {FC} from 'react';
import './link.sass';

const Link: FC<{
  src: string,
  title?: string,
  click?: boolean,
  href?: string
}> = ({src, title, click = false, href = ''}) => {
  return (
    click ? (
      <a id="link" href={href} target="_blank" rel="noreferrer">
        <li className={`fab ${src}`}></li>
      </a>
    ) : (
      <div
        id="link"
        className="copy"
        onClick={() => {
          navigator.clipboard.writeText(String(title));
        }}
      >
        <li className={src}></li>
      </div>
    )
  );
};

export default Link;
