import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import IsAnon from './components/IsAnon';

function App() {
  return (
    <div className="App w-[900px] h-[450px] mx-auto mt-40 bg-green-100 border rounded-md">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/signup' element={<IsAnon> <SignUp /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LogIn /> </IsAnon>} />
      </Routes>
    </div>
  );
}

export default App;
