import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser } from '../../api/auth';
import toast from 'react-hot-toast';
import { AccountContext } from '../../context/AccountProvider';

const Login = () => {
  const navigate = useNavigate();
  const { setAccount } = useContext(AccountContext);
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resp = await LoginUser(credentials);
      localStorage.setItem('login-token', resp.data.token);
      localStorage.setItem('user-id', resp.data.result._id);
      setAccount(resp.data.result);
      navigate('/');
      toast.success('Logged in!');
    } catch (err) {
      console.log('Error logging in ', err);
      toast.error(err.response.data.error);
    }
  };
  return (
    <div className='bg-gray-900 text-white h-[100vh] flex flex-col justify-center items-center'>
      <h1 className='text-center mb-4'>Login to ChatzApp🚀</h1>
      <form
        onSubmit={handleLogin}
        className='flex flex-col items-center text-lg gap-2'
      >
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
          Login
        </button>
      </form>
      <p className='mt-3'>
        Don&apos;t have account?{' '}
        <Link to='/signup' className='text-blue-500 underline'>
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
