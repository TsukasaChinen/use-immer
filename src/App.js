import StateNormal from './StateNormal';
import StateImmer from './StateImmer';

function App() {
  return (
    <div className="App">
      <h1>Example use-immer</h1>
      <StateNormal />
      <hr />
      <StateImmer />
    </div>
  );
}

export default App;
