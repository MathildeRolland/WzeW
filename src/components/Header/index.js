import React from 'react';

import './header.scss';

const Header = () => (
  <div className="header">
    <div className="header__circle header__circle--blue" id="circle1" />
    <div className="header__circle header__circle--grey" id="circle2">
      <h1 className="header__title">WzeW</h1>
      <div className="header__circle header__circle--orange" id="circle6" />
    </div>
    <div className="header__circle header__circle--blue" id="circle3" />
    <div className="header__circle header__circle--grey" id="circle4" />
    <div className="header__circle header__circle--blue" id="circle5" />
  </div>
);

export default Header;

