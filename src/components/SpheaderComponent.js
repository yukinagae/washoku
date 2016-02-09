'use strict';

import React from 'react';

import styles from '../styles/Spheader.css';

let Logo = (props) =>
    <h1 className="navbar-header">
      <a href={props.logo.link} className="navbar-brand">
        <img src={props.logo.path} height="40" width="40"/>
      </a>
    </h1>

let DrawerHeader = (props) =>
    <div role="banner">
      <button type="button" className="drawer-toggle drawer-hamburger">
        <span className="sr-only">toggle navigation</span>
        <span className="drawer-hamburger-icon"></span>
      </button>
    </div>

class SpheaderComponent extends React.Component {

    render() {
        return (
            <div id="sp-header" className={styles.sp_header} role="banner">
              <Logo logo={this.props.logo}/>
              <DrawerHeader />
            </div>
        );
    }
}

SpheaderComponent.displayName = 'SpheaderComponent';

export default SpheaderComponent;
