'use strict';

import React from 'react';
import LinkItems from './LinkItemsComponent';
import Logo from './LogoComponent';
import Copyright from './CopyrightComponent';

import styles from '../styles/Footer.css';

let FooterComponent = (props) =>
    <footer className={styles.site_footer}>
      <LinkItems links={props.links}/>
      <Logo logo={props.logo}/>
      <Copyright copyright={props.site.copyright}/>
    </footer>

FooterComponent.displayName = 'FooterComponent';

export default FooterComponent;
