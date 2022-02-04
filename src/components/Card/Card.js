import React from 'react';
import img from '../../assets/IMAGE.png';
const Card = ({ el }) => {
  return (
    <div className='card'>
      <img src={el.url} alt='' />
      <div className='card-content'>
        <h3>Still Standing Tall</h3>
        <p>{el.title}</p>
      </div>
    </div>
  );
};

export default Card;
