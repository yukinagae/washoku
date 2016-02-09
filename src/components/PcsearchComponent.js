'use strict';

import React from 'react';

import styles from '../styles/Pcsearch.css';

let PcsearchComponent = (props) =>
    <div className={styles.pc_search}>
      <form className={styles.form_inline} method="get" action={props.search.link}>
        <div className={styles.form_group}>
          <input className={styles.form_control} type="text" name={props.search.name} placeholder={props.search.placeholder}/>
        </div>
        &nbsp;{/* 半角スペースでmarginをとる*/}
        <button className={styles.pc_search_button} type="submit">{props.search.button}</button>
      </form>
    </div>

PcsearchComponent.displayName = 'PcsearchComponent';

export default PcsearchComponent;
