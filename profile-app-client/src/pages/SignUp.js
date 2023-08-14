import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5005';

const SignUp = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [campus, setCampus] = useState('Madrid');
  const [course, setCourse] = useState('Web Dev');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { username, password, campus, course };

    axios.post(`${API_URL}/auth/signup`, requestBody).then((response) => {});
    navigate('/login');
  };

  return (
    <div className="signup w-1/2 h-full">
      <h1 className="text-3xl mt-5">Sign Up</h1>
      <form className="flex flex-col text-left w-3/4 mx-auto" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="my-2 p-2 rounded-md"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input
          className="my-2 p-2 rounded-md"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Campus</label>
        <select
          className="my-2 p-2 rounded-md bg-white"
          name="campus"
          value={campus}
          onChange={(e) => setCampus(e.target.value)}
        >
          <option value="Madrid">Madrid</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Miami">Miami</option>
          <option value="Paris">Paris</option>
          <option value="Berlin">Berlin</option>
          <option value="Amsterdam">Amsterdam</option>
          <option value="México">México</option>
          <option value="Sao Paulo">Sao Paulo</option>
          <option value="Lisbon">Lisbon</option>
          <option value="Remote ">Remote</option>
        </select>
        <label>Course</label>
        <select
          className="my-2 p-2 rounded-md bg-white"
          name="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="Web Dev">Web Dev</option>
          <option value="UX/UI">UX/UI</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="Cyber Security">Cyber Security</option>
        </select>
        <button className='bg-white py-2 mt-4 rounded-md hover:bg-slate-100'>Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;
