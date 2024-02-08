import './drawer.css';
import { useContext } from 'react';
import { Edit } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AccountContext } from '../../../context/AccountProvider';

const ProfileDrawer = () => {
  const { showProfileDrawer, setShowProfileDrawer, account } =
    useContext(AccountContext);
  return (
    <div
      className={`prof-drawer w-[100%] lg:w-[30%] ${
        showProfileDrawer ? 'prof-drawer-open' : ''
      }`}
    >
      <div className='flex gap-4 items-center bg-gray-700 px-3 py-6 max-h-24'>
        <ArrowBackIcon
          fontSize='large'
          className='p-1 hover:bg-gray-600 rounded-lg'
          onClick={() => setShowProfileDrawer(false)}
        />
        <h3>Profile</h3>
      </div>
      <div className='flex items-center justify-center flex-col'>
        <img
          src='https://media.istockphoto.com/id/1141737652/photo/portrait-of-a-confident-young-man.webp?b=1&s=170667a&w=0&k=20&c=Y9fE0UrJiqEADUBx5ccBkExhSmnV5eyQ9kPMeGecGoM='
          alt='profile-pic'
          className='rounded-full h-48 w-48  my-4'
        />
        <div className='w-full text-md'>
          <div className='bg-gray-700 px-5 py-3 flex flex-col gap-3 mb-7'>
            <div className='flex justify-between'>
              <label className='text-gray-400'>Your name</label>
              <Edit
                fontSize='large'
                className='p-1 hover:bg-gray-600 rounded-lg'
              />
            </div>
            <p>{account?.name}</p>
          </div>
          <div className='bg-gray-700 px-5 py-3 flex flex-col gap-3  mb-7'>
            <div className='flex justify-between'>
              <label className='text-gray-400'>About</label>
              <Edit
                fontSize='large'
                className='p-1 hover:bg-gray-600 rounded-lg'
              />
            </div>
            <p>Coding the canvas of my life⚡</p>
          </div>
          <div className='bg-gray-700 px-5 py-3 flex flex-col gap-3'>
            <label className='text-gray-400'>Email</label>
            <p>{account?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDrawer;
