import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ChatsPage from './pages/chat/ChatsPage';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/' element={<ChatsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
