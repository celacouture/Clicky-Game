import React from 'react';
import "./NavBar.css";


const NavBar=props=>(

<div className='header container'>
<div className='row'>
<div className='col-12 text-center'><h3>Fun with Flags</h3></div>
</div>
<div className='row'>
<div className='col-6'>
<h4 id="currentScore">Current Score: {props.score}</h4>
</div>
<div className='col-6'>
  <h4 id="topScore">Top Score: {props.topScore}</h4>
</div>

</div>




</div>



)
export default NavBar;
