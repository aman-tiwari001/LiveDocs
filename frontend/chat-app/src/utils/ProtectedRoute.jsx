import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const isLoggedin = () => {
    try {
      const token = localStorage.getItem('login-token');
      const { exp } = jwtDecode(token);
      if (exp > Date.now() / 1000) {
        return true;
      }
      toast.error('Auth token expired! Login again');
      return false;
    } catch (error) {
      toast.error('Invalid Auth token! Login again');
      console.log('Error in protected route', error);
      return false;
    }
  };

  return isLoggedin() ? <Outlet /> : <Navigate to='/login' />;
};

export default ProtectedRoute;
