import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Title(props) {
   return(
       <h1>{props.value}</h1>
   )
}

function ListItem(props) {
    return(
        <h2><a href="#">{props.value}</a></h2>
    )
}

function Btn(props) {
    return(
        <button class="contact-btn">{props.value}</button>
    )
}

function MainContainer(props) {
    return(
        <div class="main-container">
            <Title value="EXCITING IT"/>
            <ListItem value="LinkedIn"/>
            <ListItem value="github"/>
            <ListItem value="company info"/>
            <Btn value="CONTACT"/>
        </div>
    )
}


ReactDOM.render(
 <MainContainer />,
 document.getElementById('root')
);
