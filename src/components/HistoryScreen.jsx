import React from 'react' 


const HistoryScreen = ({history}) => {

  return (
    <div className='history-container'>
        <h3>Historial</h3>
        <ul>
            {history.map((item, index) =>(
                <li key={index}>{item}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default HistoryScreen

