import React from 'react';



const Cards = (props) => {
    return <div style = {{display:"flex", flexWrap: "wrap", justifyContent: "center"}}>{props.pictures.map(picture => <img src = {picture.link} key={picture.id} onClick = {() => {props.click(picture.id,picture.isClicked)}} />)}</div>

};

export default Cards;

