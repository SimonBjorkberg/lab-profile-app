import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5005';

const ProfilePage = (props) => {
  const { user, logOutUser, setUser } = useContext(AuthContext);
  const [image, setImage] = useState();
  const [message, setMessage] = useState(undefined);
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const formData = new FormData();
    formData.append('imageUrl', e.target.files[0]);

    axios.post(`${API_URL}/api/upload`, formData).then((response) => {
      const imageUrl = response.data.fileUrl;
      setImage(imageUrl);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`${API_URL}/api/users`, { user, image }).then((response) => {
      if (response.data.message) {
        setMessage(response.data.message);
      }
      const updatedUser = response.data.user
      setUser(updatedUser)
    });
    setImage()
  };

  const handleLogOut = () => {
    logOutUser();
    navigate('/');
  };

  if (!user) {
    return <p>Loading ...</p>
  }

  console.log(image)

  return (
    <div className="flex flex-row h-full">
      <div className="w-1/2 text-left mt-5 ml-20">
        <h1 className="text-3xl">Profile</h1>
        <h1 className="opacity-40 text-xl mt-5">Username</h1>
        <h1 className="text-xl">{user.username}</h1>
        <h1 className="opacity-40 text-xl mt-5">Campus</h1>
        <h1 className="text-xl">{user.campus}</h1>
        <h1 className="opacity-40 text-xl mt-5">Course</h1>
        <h1 className="text-xl">{user.course}</h1>
        <button onClick={handleLogOut} className="text-red-600 mt-20">
          Log Out
        </button>
      </div>
      <div className="w-1/2 bg-white">
        <img
          src={user.image}
          alt="Profile_Picture"
          className="w-60 mx-auto mt-5 rounded-full"
        />
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input className='mx-auto w-2/4 mt-10' type="file" onChange={(e) => handleFileUpload(e)} />
          {image ? <button className="mt-20 bg-green-100 w-2/4 mx-auto py-2 rounded-md">Change Picture</button> : <p className='mt-20 bg-green-100 w-2/4 mx-auto py-2 rounded-md'>Input an image above</p>}

        </form>
        {message && <p className="mt-5 text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default ProfilePage;
