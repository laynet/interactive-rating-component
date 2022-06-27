import React, { useState } from 'react';
import './sass/global.scss';

import SubmitCard from './components/SubmitCard';
import ThankYouCard from './components/ThankYouCard';

function App() {
  const [selected, setSelected] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const ratingData = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
  ];

  const currentRating = (e, ratingID) => {
    setSelected(ratingID);
  };

  const submitRating = (e) => {
    setSubmitted(true);
  };
  return (
    <>
      {!submitted ? (
        <SubmitCard
          ratingData={ratingData}
          selected={selected}
          currentRating={currentRating}
          submit={submitRating}
        />
      ) : (
        <ThankYouCard />
      )}
    </>
  );
}

export default App;
