import { AuthContext } from '../context/auth.context';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5005';

const HomePage = (props) => {
  const { user, isLoggedIn, logOutUser } = useContext(AuthContext);

  if (isLoggedIn) {
    return (
      <div className="flex flex-row">
        <div className="w-1/2 text-left mt-5 ml-20">
          <h1 className="text-3xl">Profile</h1>
          <h1 className="opacity-40 text-xl mt-5">Username</h1>
          <h1 className="text-xl">{user.username}</h1>
          <h1 className="opacity-40 text-xl mt-5">Campus</h1>
          <h1 className="text-xl">{user.campus}</h1>
          <h1 className="opacity-40 text-xl mt-5">Course</h1>
          <h1 className="text-xl">{user.course}</h1>
          <button onClick={logOutUser} className="text-red-600 mt-20">
            Log Out
          </button>
        </div>
        <div className="w-1/2">
          <img
            src={user.image}
            alt="Profile_Picture"
            className="w-60 mx-auto mt-5 rounded-full"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-1/2 text-left flex flex-col bg-white h-full">
        <div className="w-3/4 mx-auto h-3/4 my-auto">
          <h1 className="text-3xl">IronProfile</h1>
          <p className="text-xl mt-3">
            Today we will create an app <br /> with authorization, adding <br />{' '}
            some cool styles!
          </p>
          <div className="flex flex-col text-center mt-20 justify-between w-2/3 mx-auto">
            <Link
              className="text-black py-2 rounded-md bg-green-200 mb-5"
              to={'/signup'}
            >
              Sign Up
            </Link>
            <Link
              className="text-black py-2 rounded-md px-14 bg-green-200"
              to={'/login'}
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default HomePage;
