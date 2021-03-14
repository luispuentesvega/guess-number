import GuessResult from './GuessResult';
import React, { useRef, useEffect, useState } from 'react';

const GuessForm = ({
  attempts,
  btnRef,
  errorClasses,
  hasFieldError,
  inputRef,
  number,
  onHandleChange,
  onHandleKeypress,
  onHandleReset,
  onHandleSubmit,
}) => {
  return (
    <form className="ui centered card form" onSubmit={onHandleSubmit}>
      <div className="content">
        <div className="header">Type the number</div>
        <div className="meta">
          <span className="date">Guess the number between 1 and 100</span>
        </div>
        <div className="description">
          <div className={`ui input fluid focus ${errorClasses}`}>
            <input
              type="text"
              ref={inputRef}
              value={number}
              onChange={onHandleChange}
              onKeyPress={onHandleKeypress}
              placeholder="Number"
            />
          </div>
          {hasFieldError && (
            <div className="inline field error">
              <div className="ui">
                <label>Type a valid number</label>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="extra content">
        <button
          type="submit"
          ref={btnRef}
          className="ui green button"
          disabled={attempts <= 0}
        >
          Guess
        </button>
        <button
          className="ui grey button"
          type="button"
          onClick={onHandleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default GuessForm;
