import React from 'react';

const Navbar = (props) => {
    return <div style = {{display:"flex", justifyContent:"flex-end"}}><span>Score:  {props.score}  High Score : {props.highScore}</span></div>
}

export default Navbar;