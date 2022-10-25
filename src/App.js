import './App.css';
import { Routes, Route } from 'react-router-dom';
import MHome from './Components/Pages/MHome';

function App() {
  return (
    <div className="App">
      <h1>React router</h1>
      <Routes>
        <Route path='/' element={<MHome></MHome>}></Route>
      </Routes>
    </div>
  );
}

export default App;
