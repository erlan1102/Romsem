import React from 'react';
import './style.css'
import {Routes, Route} from 'react-router-dom'
import Home from "./Components/Home/Home";
import Administrator from "./Components/Admin/Administrator";

function App() {

  return (
    <div className="App">
        <Routes>
            <Route path='/admin' element={<Administrator/>}/>
            <Route path='/*' element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
