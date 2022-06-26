import React from 'react';
import '../sass/submitCard.scss';
import starIcon from '../assets/icon-star.svg';

const SubmitCard = () => {
  return (
    <>
      <div className='card-wrapper'>
        <div className='card'>
          <div className='star-wrapper'>
            <img className='star' src={starIcon} alt='' />
          </div>
          <h1 className='card-title'>How did we do?</h1>
          <p className='card-text'>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className='rating-btn-wrapper'>
            <button className='rating-btn'>1</button>
            <button className='rating-btn'>2</button>
            <button className='rating-btn'>3</button>
            <button className='rating-btn'>4</button>
            <button className='rating-btn'>5</button>
          </div>
          <button className='btn submit-btn'>submit</button>
        </div>
      </div>
    </>
  );
};

export default SubmitCard;
