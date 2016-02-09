require('normalize.css');

import styles from '../styles/App.css';

import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Slider from './SliderComponent';
import Gallery from './GalleryComponent';
import Blog from './BlogComponent';

let site = {
    name: 'React',
    copyright: '© 2016 React'
};

let logo = {
    path: '../images/yeoman.png',
    link: '/',
    height: 89,
    width: 103
};

let header_links = [
    { name: 'About1', link: '/about1/' },
    { name: 'About2', link: '/about2/' },
    { name: 'About3', link: '/about3/' },
    { name: 'About4', link: '/about4/' },
    { name: 'About5', link: '/about5/' },
    { name: 'About6', link: '/about6/' }
];

let search = {
    title: 'SEARCH',
    link: '/',
    placeholder: 'Search...',
    button: 'Search',
    name: 's'
};

let account = {
    login: {
        name: 'Log in',
        link: '/login/'
    },
    signup: {
        name: 'Sign up',
        link: '/signup/'
    }
};

let sns = {
    facebook: {
        link: 'https://facebook.com/'
    },
    twitter: {
        link: 'https://twitter.com/'
    },
    instagram: {
        link: 'https://instagram.com/'
    }
};

let footer_links = [
    { name: 'Company', link: '/company/' },
    { name: 'Contact', link: '/contact/' },
    { name: 'Terms', link: '/terms/' }
];

let galleries = {
    title: '',
    list: [
        { link: '/gallery/1',
          title: 'gallery1',
          content: 'gallery content1',
          image: {
              path: '../images/Light_Frame.png',
              alt: 'alt1',
              height: 0,
              width: 0
          }
        }
    ]
};

let blog = {
    title: 'Blog',
    link: '/blog/'
};

let articles = {
    title: 'Last updated',
    list: [
        { link: '/blog/1',
          title: 'title1',
          content: 'content1',
          posted_date: '01/02/2016',
          author: {
              name: 'author1',
              link: '/author/1'
           },
          image: {
              path: '../images/Dark_Silhouette.jpg',
              alt: 'alt1',
              height: 559,
              width: 838
          }
        }
    ]
};

let comments = {
    title: 'Latest comments',
    list: [
        { link: '/comment/1',
          title: 'comment1',
          content: 'comment content1',
          posted_date: '01/01/2016',
          author: {
              name: 'author2',
              link: '/author/2'
          }
        }
    ]
};

let images = {
    title: '#React',
    list: [
        { path: 'images/Light_Silhouette.jpg' }
    ]
};

let sliders = [
    { link: '/slider/1', title: 'SLIDER 1', content: 'slider content1' },
    { link: '/slider/2', title: 'SLIDER 2', content: 'slider content2' }
];

let menus = {
    title: 'MENU',
    list: [
        {
            link: '/menu/1',
            title: 'menu1',
            content: 'menu content1',
            image: {
                path: '../images/Light_Frame.png'
            }
    }]
};

let places = {
    title: 'PLACE',
    content: 'aloha',
    list: [
        {
            link: '/place/1',
            title: 'place1'
        },
        {
            link: '/place/2',
            title: 'place2'
        }
    ]
};

/* let Drawer = (props) =>
   <div>
   <div className="drawer drawer--right drawer-main drawer-default">
   <nav className={styles.drawer_nav} role="navigation">
   <ul className="drawer-menu">
   <li className="drawer-menu-item"><a href="/about/">About</a></li>
   <li className="drawer-menu-item"><a href="/contact/">Contact</a></li>
   <li className="drawer-menu-item"><a href="/terms/">Terms</a></li>
   <li className="drawer-menu-item"><a href="/signup/">Sign up</a></li>
   <li className="drawer-menu-item"><a href="/login/">Log in</a></li>
   <li className="drawer-menu-item"><a href="https://twitter.com/"><i className="fa fa-twitter-square"></i> Twitter</a></li>
   <li className="drawer-menu-item"><a href="https://facebook.com/"><i className="fa fa-facebook-square"></i> Facebook</a></li>
   <li className="drawer-menu-item"><a href="https://instagram.com/"><i className="fa fa-instagram"></i> Instagram</a></li>
   </ul>
   <div style={{ margin: '10px' }}>
   <form method="get" action="/">
   <div className="form-group">
   <input type="text" name="s" className="form-control" placeholder="Search..."/>
   </div>
   <input type="submit" className="btn btn-info btn-sm btn-block" value="Search"/>
   </form>
   </div>
   </nav>
   </div>
   </div> */

class AppComponent extends React.Component {

    componentDidMount() {
        /*         $('.navbar-fixed-top').autoHidingNavbar(); */
        /* var $drawer = $('.drawer');
           $drawer.drawer(); */
     }

  render() {
    return (
      <div className="home drawer drawer--right drawer-close">
        <Header logo={logo} links={header_links} search={search} sns={sns} account={account}/>
        <Slider sliders={sliders} />
        <div style={{ position: 'relative' }}>
          <Gallery galleries={galleries}/>
          <Blog blog={blog} articles={articles} comments={comments} images={images}/>
          <Footer site={site} logo={logo} links={footer_links}/>
        </div>
        {/*<Drawer />*/}
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
