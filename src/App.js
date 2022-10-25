import './App.css';
import { Routes, Route } from 'react-router-dom';
import MHome from './Components/Pages/MHome';
import View from './Components/Pages/View';
import EditDetail from './Components/Pages/EditDetail';
import CopyrightSec from './Components/Shared/Footer/CopyrightSec';


function App() {
  return (
    <div className="App">
      <h1>React router</h1>
      <Routes>
        <Route path='/' element={<MHome></MHome>}></Route>
        <Route path='/view' element={<View></View>}></Route>
        <Route path='/edit' element={<EditDetail></EditDetail>}></Route>
      </Routes>
      <CopyrightSec></CopyrightSec>
    </div>
  );
}

export default App;
