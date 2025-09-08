import React from 'react'
import '../styles/Screen.css'

const Screen = (props) => {
  return (
    <div className='border'>
      <div className='screen'>
      {props.value}
      </div>
    </div>
  );
}

export default Screen
