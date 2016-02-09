'use strict';

import React from 'react';
import Articles from './ArticlesComponent';
import Comments from './CommentsComponent';
import Images from './ImagesComponent';

import styles from '../styles/Blog.css';

let BlogComponent = (props) =>
    <section className={styles.blog}>
      <div className={styles.blog_container}>
        <div className={styles.row}>
          <div className={styles.blog_left}>
            <h1 className={styles.blog_title}>
              <a href={props.blog.link}>{props.blog.title}</a>
            </h1>
            <Articles articles={props.articles} />
          </div>
          <div className={styles.blog_right}>
            <aside>
              <Comments comments={props.comments}/>
              <Images images={props.images} />
            </aside>
          </div>
        </div>
      </div>
    </section>

BlogComponent.displayName = 'BlogComponent';

export default BlogComponent;
