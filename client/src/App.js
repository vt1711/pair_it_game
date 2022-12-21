import './App.css';
import Mainbox from './components/mainbox/Mainbox';
import Rulebox from './components/rulebox/Rulebox';
import Scoreboard from './components/scoreboard/Scoreboard';
import { Route, Routes } from "react-router-dom";
import Ibutton from './components/ibutton/Ibutton';

function App() {
  return (
    <>
      <Ibutton />
      <Routes>

        <Route path="/gameinfo" element={<Rulebox />} />
        <Route path="/" element={<div className='gameareadiv'>
          <Mainbox />
          <Scoreboard />
        </div>} />
      </Routes>




    </>
  );
}

export default App;
