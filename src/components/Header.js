import React from 'react'
import { Link } from 'react-router-dom';

import pdf from '../static/vixayResume.pdf';

const Header = () => (
  <header className="App-header header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header" to="/">
          <h1>Vixay</h1>
        </Link>
        <Link className="header" to="/resume">
          <button className="button button--link">Resume</button>
        </Link>
      </div>
    </div>
  </header>
)

export default Header;