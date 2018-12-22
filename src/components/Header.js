import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="App-header header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header" to="/">
          <h1>Vixay</h1>
        </Link>
        <Link className="header" to="/resume">
          <h3 className="tabs">Resume</h3>
        </Link>
      </div>
    </div>
  </header>
)

export default Header;