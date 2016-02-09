'use strict';

import React from 'react';

require('styles//Account.css');

let AccountComponent = (props) =>
    <p>
      <a href={props.account.signup.link}>{props.account.signup.name}</a>
      　/　{/* 全角スペースでmarginをとる*/}
      <a href={props.account.login.link}>{props.account.login.name}</a>
      　{/* 全角スペースでmarginをとる*/}
    </p>

AccountComponent.displayName = 'AccountComponent';

export default AccountComponent;
