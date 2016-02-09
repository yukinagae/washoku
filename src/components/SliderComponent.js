'use strict';

import React from 'react';

import styles from '../styles/Slider.css';

let Slider = (props) =>
    <div className={styles.slider_visual}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.slider_col}>
            <h1 className={styles.slider_title}>{props.slider.title}</h1>
            <p className={styles.slider_content}>{props.slider.content}</p>
            <p className={styles.slider_content}>
              <a className={styles.slider_visual_link} href={props.slider.link}>Read more</a>
            </p>
          </div>
        </div>
      </div>
    </div>

class SliderComponent extends React.Component {

    componentDidMount() {
        $('.responsive').slick({
            dots: true,
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 600
        });
    }
    
    render() {
        return (
            <section className="slider responsive block-md">
              {
                  this.props.sliders.map(function(slider) {
                      return <Slider key={slider.link} slider={slider} />
                  })
              }
            </section>
        );
    }
}

SliderComponent.displayName = 'SliderComponent';

export default SliderComponent;
