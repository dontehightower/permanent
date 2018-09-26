import React from 'react';
import { css } from 'react-emotion';


const Card = (props) => {
  const cardStyles = css`
    width: 200px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  `;

  const imageStyles = css`
    height: 160px;
    width: 180px;
  `;

  return (
    <div className={cardStyles}>
      <img
        className={imageStyles}
        src="https://via.placeholder.com/160x180"
        alt="Placeholder"
      ></img>
    </div>
  );
};

export default Card;