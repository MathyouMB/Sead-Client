import React from 'react';
import '../style/Header.scss';
import { Link } from "react-router-dom";
const Header = () => {

  return (
    <div className="header">
       <Link to={'/notes/'}><img className="header-logo" src="https://i.imgur.com/ZrBzEFC.png"></img></Link>
    </div>
  );
}

export default Header;
