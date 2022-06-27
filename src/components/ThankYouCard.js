import React from 'react';
import thankYouIcon from '../assets/illustration-thank-you.svg';
import '../sass/thankYouCard.scss';

const ThankYouCard = ({ selected }) => {
  return (
    <>
      <div className='card-wrapper'>
        <div className='card thank-you--card'>
          <img src={thankYouIcon} alt='' />
          <button className='btn thank-you-btn'>
            You selected {selected} out of 5
          </button>
          <h1 className='card-title'>Thank you!</h1>
          <p className='card-text'>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </>
  );
};

export default ThankYouCard;
