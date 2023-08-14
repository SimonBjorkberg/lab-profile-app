import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';

const HomePage = () => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  if (user) {
    navigate('/profile')
  }

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
};

export default HomePage;
