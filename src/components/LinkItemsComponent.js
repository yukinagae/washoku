'use strict';

import React from 'react';

let LinkItem = (props) =>
    <li><a href={props.link.link}>{props.link.name}</a></li>

let LinkItemsComponent = (props) =>
    <ul>
    {
        props.links.map(function(link) {
            return <LinkItem key={link.name} link={link}/>
        })
    }
    </ul>

LinkItemsComponent.displayName = 'LinkItemsComponent';

export default LinkItemsComponent;
