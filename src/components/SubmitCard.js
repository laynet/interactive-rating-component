import React from 'react';
import '../sass/submitCard.scss';
import starIcon from '../assets/icon-star.svg';

const SubmitCard = ({ ratingData, currentRating, selected, submit }) => {
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
            {ratingData.map((num) => {
              return (
                <button
                  // className='rating-btn'
                  className={`rating-btn ${
                    selected === num.id ? 'btn-selected' : ''
                  }`}
                  key={num.id}
                  id={num.id}
                  onClick={(e) => currentRating(e, num.id)}
                >
                  {num.value}
                </button>
              );
            })}
          </div>
          <button className='btn submit-btn' onClick={submit}>
            submit
          </button>
        </div>
      </div>
    </>
  );
};

export default SubmitCard;
