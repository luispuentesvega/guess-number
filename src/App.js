import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import GuessForm from './components/GuessForm';
import GuessResult from './components/GuessResult';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const App = () => {
  const inputRef = useRef();
  const btnRef = useRef();
  const [number, setNumber] = useState('');
  const [guessNumber, setGuessNumber] = useState();
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(5);
  const [hasFieldError, setHasFieldError] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
    setGuessNumber(getRandomInt(100));
  }, []);

  const onHandleChange = (e) => {
    setNumber(e.target.value);
    setHasFieldError(false);
  };

  const onHandleSubmit = (e) => {
    console.log('SUBMIT:', number);
    e.preventDefault();

    if (!number || isNaN(number)) {
      console.log('IS NOT A NUMBER ', number);
      setHasFieldError(true);
      return;
    }

    console.log('attempts', attempts);
    if (attempts <= 1) {
      setMessage(
        `You Lost, the number was ${guessNumber}, give another try by clicking Reset 😉`
      );
    } else if (guessNumber > number) {
      setMessage(`The number is bigger than ${number} 🤓`);
    } else if (guessNumber < number) {
      setMessage(`The number is smaller than ${number} 🤓`);
    } else {
      setMessage(`The number is ${number}, Congratulations 🎉🎉🎉!`);
    }
    setNumber('');
    setAttempts((prevState) => prevState - 1);
    inputRef.current.focus();
  };

  const onHandleReset = () => {
    setAttempts(5);
    setNumber('');
    setHasFieldError('');
    setMessage('');
    inputRef.current.focus();
  };

  const onHandleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      btnRef.curren.click();
    }
  };

  console.log(guessNumber);

  const errorClasses = hasFieldError ? 'field error' : '';

  return (
    <div>
      <GuessForm
        attempts={attempts}
        btnRef={btnRef}
        errorClasses={errorClasses}
        hasFieldError={hasFieldError}
        inputRef={inputRef}
        number={number}
        onHandleChange={onHandleChange}
        onHandleKeypress={onHandleKeypress}
        onHandleReset={onHandleReset}
        onHandleSubmit={onHandleSubmit}
      />
      <GuessResult
        attempts={attempts}
        message={message}
        hasFieldError={hasFieldError}
      />
    </div>
  );
};

export default App;
