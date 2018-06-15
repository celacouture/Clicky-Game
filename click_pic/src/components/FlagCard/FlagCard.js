import React from 'react';
import './FlagCard.css';
import flags from '../../flags.json';
// import flags from '../../flags.json';


const FlagCard=props=>(
  <div className='card'>
    <div className='card-img-top'>
      <img onClick={()=>props.sortFlags(props.id, props.clicked)}
        id={props.id}
        alt={props.country}
        src={props.link}
        className="img"
        data-clicked={props.clicked}/>

    </div>

  </div>

)







export default FlagCard;


//on click when a flag is clicked ti shuffles the Flags
//lodash shuffle
