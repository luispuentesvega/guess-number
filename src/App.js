import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import GuessForm from './components/GuessForm';
import GuessResult from './components/GuessResult';

const MAX_NUMBER = 100;

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
    setGuessNumber(getRandomInt(MAX_NUMBER));
  }, []);

  const onHandleChange = e => {
    setNumber(e.target.value);
    setHasFieldError(false);
  };

  const onHandleSubmit = e => {
    e.preventDefault();

    if (!number || isNaN(number)) {
      setHasFieldError(true);
      return;
    }

    if (attempts <= 1) {
      setMessage(
        `You Lost, the number was ${guessNumber}, give another try by clicking Reset 😉`
      );
    } else if (guessNumber > number) {
      setMessage(`The number is greater than ${number} 🤓`);
    } else if (guessNumber < number) {
      setMessage(`The number is less than ${number} 🤓`);
    } else {
      setMessage(`The number is ${number}, Congratulations 🎉🎉!`);
    }

    window.dataLayer.push({
      event: 'click_guess_number',
      number: number,
      name: 'Luis',
      data: {
        number: number,
        name: 'Puentes',
        date: new Date().toISOString()
      }
    });

    setNumber('');
    setAttempts(prevState => prevState - 1);
    inputRef.current.focus();
  };

  const onHandleReset = () => {
    setAttempts(5);
    setNumber('');
    setHasFieldError('');
    setMessage('');
    setGuessNumber(getRandomInt(MAX_NUMBER));
    inputRef.current.focus();
  };

  const onHandleKeypress = e => {
    //it triggers by pressing the enter key
    if (e.keyCode === 13) {
      btnRef.curren.click();
    }
  };

  const errorClasses = hasFieldError ? 'field error' : '';

  return (
    <div>
      <h1 className="title">Guess the Secret Number 😎</h1>
      <p />
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
      <div className="extra content" />
    </div>
  );
};

export default App;
