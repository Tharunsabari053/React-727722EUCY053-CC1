import React, { useState } from 'react';
import './App.css'
const ShowHideText = () => {
  const [isTextVisible, setIsTextVisible] = useState(true);

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div className='hi'>
      <button onClick={toggleTextVisibility}>
        {isTextVisible ? 'Hide Data' : 'Show Data'}
      </button>

      {isTextVisible && <p>This is the text that can be shown or hidden. Tap the button above to hide this text</p>}
    </div>
  );
};

export default ShowHideText;
