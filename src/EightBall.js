import { useState } from 'react';
import getRandom from './helpers';


function EightBall({ answers }) {
  const [ color, setColor ] = useState('black');
  const [ msg, setMsg ] = useState('Think of a Question');

  function handleClick() {
    const { msg, color } = getRandom(answers);

    setColor(color);
    setMsg(msg);
  }

  return (
    <button onClick={handleClick} style={{
        backgroundColor: color,
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        marginTop: '200px'
      }}>
      { msg }
    </button>
  );
}



export default EightBall;