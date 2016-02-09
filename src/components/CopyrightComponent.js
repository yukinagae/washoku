'use strict';

import React from 'react';

require('styles//Copyright.css');

let CopyrightComponent = (props) =>
    <p>
      <small>{props.copyright}</small>
    </p>

CopyrightComponent.displayName = 'CopyrightComponent';

export default CopyrightComponent;
