import React from 'react';

const Square = (props) => {
  return (
    <div className="grid">
      {props.squares.map((value, index) => (
        <main key={index}>
          <div
            className={`square ${value ? `filled-${value}` : ''}`}
            onClick={() => props.handleClick(index)}
          >
            {value}
          </div>
        </main>
      ))}
    </div>
  );
};

export default Square;
