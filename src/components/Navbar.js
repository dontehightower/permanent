import React from 'react';
import { css } from 'react-emotion';

const Navbar = () => {
  const navStyles = css`
    background-color: #FBFBFB;
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 30px;
  `;

  const listStyles = css`
    list-style: none;
    display: flex;
    width: 45%;
    justify-content: space-between;
  `;

  const linkStyles = css`
    color: #000;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    transition: all .2s;

    &:hover {
      font-size: 20px;
    }
  `;

  return (
    <nav className={navStyles}>
      <ul className={listStyles}>
        <li className={linkStyles}>All</li>
        <li className={linkStyles}>Audio</li>
        <li className={linkStyles}>Video</li>
        <li className={linkStyles}>VR</li>
        <li className={linkStyles}>Images</li>
      </ul>
    </nav>
  );
};

export default Navbar;