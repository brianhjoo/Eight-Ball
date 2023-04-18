import { useState } from 'react';
import getRandom from './helpers';

/**EightBall: gets random object of answers array and on click changes color/answer
 * 
 * Props:
 * - answers: an array of objects contains {msg, color}
 * 
 * State:
 * - color of current answer
 * - msg of current answer
 * 
 * App -> EightBall 
 * 
 */
function EightBall({ answers }) {
  const [ color, setColor ] = useState('black'); //color depends on message - make it one piece of state which is an object of color and message
  const [ msg, setMsg ] = useState('Think of a Question');
  // const [answer, setAnswer] = useState({
  //   color: 'black', 
  //   message:'Think of a Question'
  // });
  function handleClick() {
    const { msg, color } = getRandom(answers);

    setColor(color);
    setMsg(msg);
    //setAnswer({msg, color})
  }

  return (
    <button onClick={handleClick} style={{
        backgroundColor: color, //only need background color because it is dynamic- can style the rest with css file
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        marginTop: '200px',
        color: 'white'
      }}>
      { msg }
    </button>
  );
}



export default EightBall;