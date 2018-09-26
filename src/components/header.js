import React from 'react';
import { css } from 'react-emotion';

const Header = () => {
  const headerStyles = css`
    background-color: #131b4a;
    height: 70px;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const h2Styles = css`
    font-size: 24px;
    font-weight: bold;
    color: #ff9933;
  `;
  return (
    <header className={headerStyles}>
      <h2 className={h2Styles}>Permanent</h2>
      <h2 className={h2Styles}>E4Youth</h2>
    </header>
  );
};
export default Header;
