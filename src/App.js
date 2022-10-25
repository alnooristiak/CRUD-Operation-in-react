import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>React router</h1>
      <Routes>
        <Route path='/home' element={}></Route>
      </Routes>
    </div>
  );
}

export default App;
