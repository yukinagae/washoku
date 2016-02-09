'use strict';

import React from 'react';

import styles from '../styles/Images.css';

let Image = (props) =>
    <div className={styles.image}>
      <img src={props.image.path}/>
    </div>

let ImagesComponent = (props) =>
    <section className={styles.images}>
      <h1 className={styles.images_title}>{props.images.title}</h1>
      <div className={styles.row}>
        {
            props.images.list.map(function(image) {
                return <Image key={image.path} image={image}/>
            })
        }
      </div>
    </section>

ImagesComponent.displayName = 'ImagesComponent';

export default ImagesComponent;
