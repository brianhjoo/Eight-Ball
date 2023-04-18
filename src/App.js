import './App.css';
import answers from './answers';
import EightBall from './EightBall';

/**renders magic eight ball */
function App() {
  return (
    <div className="App">
      <EightBall answers={answers} />
    </div>
  );
}

export default App;
