'use strict';

import React from 'react';

import styles from '../styles/Gallery.css';

let Gallery = (props) =>
    <div className={styles.gallery}>
      <p>
        <a href={props.gallery.link}>
          <img src={props.gallery.image.path}/>
        </a>
      </p>
      <h1 className={styles.gallery_title}>{props.gallery.title}</h1>
      <p>{props.gallery.content}</p>
    </div>

let GalleryComponent = (props) =>
    <section className={styles.galleries}>
      <div className={styles.galleries_container}>
        <div className={styles.row}>
        {
            props.galleries.list.map(function(gallery) {
                return <Gallery key={gallery.link} gallery={gallery} />
            })
        }
        </div>
      </div>
    </section>

GalleryComponent.displayName = 'GalleryComponent';

export default GalleryComponent;
