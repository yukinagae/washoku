'use strict';

import React from 'react';

require('styles//Comments.css');
import styles from '../styles/Comments.css';

let Comment = (props) =>
    <section className={styles.comment}>
      <h1 className={styles.comment_title}><a href={props.comment.link}>{props.comment.title}</a></h1>
      <p><small>By {props.comment.author.name}</small></p>
      <p>{props.comment.content}</p>
      <p><time>{props.comment.post_date}</time></p>
    </section>


let CommentsComponent = (props) =>
    <section className={styles.comments}>
      <h1 className={styles.comments_title}>{props.comments.title}</h1>
      { props.comments.list.map(function(comment) {
          return <Comment key={comment.link} comment={comment}/>
      })}
    </section>

CommentsComponent.displayName = 'CommentsComponent';

export default CommentsComponent;
