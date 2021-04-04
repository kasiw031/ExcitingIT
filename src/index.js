import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import arrow from './arrow.png';

// onmouseenter	The event occurs when the pointer is moved 
// onto an element
// onmouseleave	The event occurs when the pointer is moved 
// out of an element

function ListItem(props) {
    return(
        <div class="listItem-container">
            <img class="arrow-img" src={arrow}></img>
            <h2><a href="#">{props.value}</a></h2>
        </div>
    )
}

function MainContainer(props) {
    return(
        <div class="main-container">
            <h1>EXCITING IT</h1>
            <ListItem value="LinkedIn"/>
            <ListItem value="github"/>
            <ListItem value="company info"/>
            <button class="contact-btn">CONTACT</button>
        </div>
    )
}


ReactDOM.render(
 <MainContainer />,
 document.getElementById('root')
);
