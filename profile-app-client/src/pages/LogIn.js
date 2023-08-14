import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const API_URL = 'http://localhost:5005';

const LogIn = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const requestBody = { username, password };

    e.preventDefault();

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        const token = response.data.authToken;
        storeToken(token);
        authenticateUser();
      })
      .catch((err) => console.log(err));
    navigate('/profile');
  };

  return (
    <div className="login">
      <h1 className="text-3xl mt-5">Log In</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-2/3 mx-auto mt-20"
      >
        <input
          className="my-2 p-2 w-2/3 mx-auto"
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="my-2 p-2 w-2/3 mx-auto"
          type="password"
          name="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="mt-10 bg-white w-1/3 mx-auto p-2 rounded-md hover:bg-slate-100">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
