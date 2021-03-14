import React from 'react';

const emojies = {
  5: '😎',
  4: '😜',
  3: '🙂',
  2: '🤔',
  1: '😬',
};

const colors = {
  5: 'green',
  4: 'yellow',
  3: 'yellow',
  2: 'orange',
  1: 'red',
};

const GuessResult = ({ attempts, message }) => {
  return (
    <div className="ui centered card form">
      <div className="content">
        <p>
          <a className={`ui circular label ${colors[attempts] || 'green'}`}>
            {attempts}
          </a>{' '}
          remaining attempts{' '}
          <span style={{ fontSize: '20px' }}>{emojies[attempts] || '🙂'}</span>
        </p>
      </div>
      <div className="content">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default GuessResult;
