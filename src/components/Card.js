import React from 'react';

const Card = ({ title, body, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='comics' src={`/anime/${id}.jpg?size=200x200`} />
      <div className="decs">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Card;