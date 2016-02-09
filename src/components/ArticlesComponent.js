'use strict';

import React from 'react';

import styles from '../styles/Articles.css';

let ArticleImage = (props) =>
    <div className={styles.article_image}>
      <p>
        <a href={props.article.link}>
          <img width={props.article.image.width} height={props.article.image.height} src={props.article.image.path} alt={props.article.image.alt}/>
        </a>
      </p>
    </div>

let ArticleContent = (props) =>
    <div className={styles.article_content}>
      <h2 className={styles.article_title}><a href={props.article.link}>{props.article.title}</a></h2>
      <p><small>By &nbsp;<a href={props.article.author.link}>{props.article.author.name}</a></small></p>
      <p>{props.article.content}</p>
      <p><a href={props.article.link}>READ MORE</a></p>
      <p><time>Posted on {props.article.posted_date}</time></p>
    </div>

let Article = (props) =>
    <div className={styles.article}>
        <ArticleImage article={props.article}/>
        <ArticleContent article={props.article}/>
    </div>

let ArticlesComponent = (props) =>
    <section className={styles.articles}>
      <h1 className={styles.articles_title}>{props.articles.title}</h1>
      {
          props.articles.list.map(function(article) {
              return <Article key={article.link} article={article}/>
          })
      }
    </section>

ArticlesComponent.displayName = 'ArticlesComponent';

export default ArticlesComponent;
