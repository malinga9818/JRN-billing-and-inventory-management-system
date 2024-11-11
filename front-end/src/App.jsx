import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div >
<BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
      
    </Routes>
</BrowserRouter>

    </div>
  )
}

export default App