'use strict';

import React from 'react';
import LinkItems from './LinkItemsComponent';
import Pcsearch from './PcsearchComponent';
import Spheader from './SpheaderComponent';
import Logo from './LogoComponent';
import Account from './AccountComponent';
import Sns from './SnsComponent';

import styles from '../styles/Header.css';

let Navigation = (props) =>
    <nav>
      <div className={styles.container}>
        <LinkItems links={props.links}/>
      </div>
    </nav>

let HeaderComponent = (props) =>
    <header>
      <Spheader logo={props.logo}/>
      <div className={styles.site_header}>
        <div className={styles.container}>
          <Pcsearch search={props.search}/>
          <Logo logo={props.logo}/>
          <div>
            <Sns sns={props.sns}/>
            <Account account={props.account}/>
          </div>
        </div>
        <Navigation links={props.links}/>
      </div>
    </header>

HeaderComponent.displayName = 'HeaderComponent';

export default HeaderComponent;
