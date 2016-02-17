'use strict';

import React from 'react';

import styles from '../styles/Spheader.css';

let Logo = (props) =>
    <h1>
      <a href={props.logo.link}>
        <img src={props.logo.path} height="50" width="50"/>
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
            {/* <DrawerHeader /> */}
            </div>
        );
    }
}

SpheaderComponent.displayName = 'SpheaderComponent';

export default SpheaderComponent;
