import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { SignUpUser } from '../../api/auth';

const SignUp = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
    const handleSignUp = async (e) => {
      e.preventDefault();
      try {
        const resp = await SignUpUser(credentials);
        localStorage.setItem('login-token', resp.data.token);
        localStorage.setItem('user-id', resp.data.result._id);
        if(resp.error) {
          toast.error(resp.error);
          return;
        }
        navigate('/');
        toast.success('User registered!');
      } catch (err) {
        console.log('Error registering in ', err);
        toast.error(err.response.data.error);
      }
    };
  return (
    <div className='bg-gray-900 text-white h-[100vh] flex flex-col justify-center items-center'>
      <h1 className='text-center mb-4'>Create ChatzApp🚀 account</h1>
      <form
        onSubmit={handleSignUp}
        className='flex flex-col items-center text-lg gap-2'
      >
        <label>Name</label>
        <input
          value={credentials.name}
          onChange={handleChange}
          type='text'
          name='name'
          className='p-1 rounded-xl w-[160%] text-black'
        />
        <label>Email</label>
        <input
          value={credentials.email}
          onChange={handleChange}
          type='email'
          name='email'
          className='p-1 rounded-xl w-[160%] text-black'
        />
        <label>Password</label>
        <input
          value={credentials.password}
          onChange={handleChange}
          type='password'
          name='password'
          className='p-1 rounded-xl w-[160%] text-black'
        />
        <button
          type='submit'
          className='bg-violet-900 mt-3 px-4 py-1 rounded-xl hover:bg-violet-800 shadow-xl'
        >
          Sign Up
        </button>
      </form>
      <p className='mt-3'>
        Already a user?{' '}
        <Link to='/login' className='text-blue-500 underline'>
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
