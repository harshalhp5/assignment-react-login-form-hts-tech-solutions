import { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import UserContext from './contexts/UserContext';

function App() {

  const [userData, setUserdata] = useState(null);

  return (
    <div className='app'>
      <UserContext.Provider value={{userData, setUserdata}}>
        <BrowserRouter>
          <Routes>
              <Route path='/' index element={<Home />} />
              <Route path='login' element={<Login setUserdata={setUserdata} />} />
              <Route path='register' element={<Register setUserdata={setUserdata} />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
