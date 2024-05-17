import  { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('../pages/Home/Home'));
const Login = lazy(() => import('../pages/Login/Login'));

const AppRoutes: React.FC = () => {
  const { signed } = useAuth();

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={signed ? <Navigate to="/" /> : <Login />} />
          <Route path="/" element={<PrivateRoute element={<Home />} />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AppRoutes;
