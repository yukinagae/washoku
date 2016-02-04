'use strict';

import React from 'react';

require('styles//Header.css');

let HeaderComponent = (props) => (
  <header>
    <div className="site-header">
      <div className="container">
        <h1 className="text-center">
          <a href="/">
            <img src="../images/yeoman.png" />
          </a>
        </h1>
      </div>
    </div>
  </header>
);

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;
