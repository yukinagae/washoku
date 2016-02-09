'use strict';

import React from 'react';

import styles from '../styles/Sns.css';

let SnsComponent = (props) =>
    <p>
      <a href={props.sns.twitter.link}><i className={styles.twitter}></i></a>　{/* 全角スペースでmarginをとる*/}
      <a href={props.sns.facebook.link}><i className={styles.facebook}></i></a>　{/* 全角スペースでmarginをとる*/}
      <a href={props.sns.instagram.link}><i className={styles.instagram}></i></a>
    </p>

SnsComponent.displayName = 'SnsComponent';

export default SnsComponent;
