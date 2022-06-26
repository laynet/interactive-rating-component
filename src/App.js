import './App.scss';
import star from './assets/icon-star.svg';
import thankYouIcon from './assets/illustration-thank-you.svg';

function App() {
  return (
    <>
      <div className='card-wrapper'>
        <div className='card thank-you--card'>
          <img src={thankYouIcon} alt='' />
          <button className='btn thank-you-btn'>You selected 4 out of 5</button>
          <h1 className='card-title'>Thank you!</h1>
          <p className='card-text'>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
      {/* <div className='card-wrapper'>
        <div className='card'>
          <div className='star-wrapper'>
            <img className='star' src={star} alt='' />
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
      </div> */}
    </>
  );
}

export default App;
