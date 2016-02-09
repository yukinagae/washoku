'use strict';

import React from 'react';

require('styles//Logo.css');

let LogoComponent = (props) =>
    <h1>
      <a href={props.logo.link}>
        <img src={props.logo.path} height={props.logo.height} width={props.logo.width}/>
      </a>
    </h1>

LogoComponent.displayName = 'LogoComponent';

export default LogoComponent;
