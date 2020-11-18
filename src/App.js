import logo from './logo.svg';
import './App.css';
import Box from './Box';

function App() {
  return (
    <div className="App">

      <Box height='100px' width='100px' color='red' />
      <Box height='100px' width='100px' color='blue' />
      <Box height='100px' width='100px' color='green' />
    </div>
  );
}

export default App;
