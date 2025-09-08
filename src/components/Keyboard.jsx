import React from 'react';
import '../styles/Keyboard.css';
import Button from './Button';

export default function Keyboard({handleButtonClick}) {
    const botones = [
        'C', '+', '-', '%',
        '7', '8', '9', '/',
        '4', '5', '6', 'S',
        '1', '2', '3', '*',
        '0', '.', '=', 'A'
    ];

  return (
    <div className='keyBoard'>
      {botones.map((buttonValue) =>(
        <Button key={buttonValue}
        value={buttonValue}
        onClick={handleButtonClick}/>
      ))}
    </div>
  )
}
