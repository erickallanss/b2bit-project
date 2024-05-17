import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { PrivateRouteProps } from '../interfaces/RoutesInterfaces';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { signed } = useAuth();

  return signed ? element : <Navigate to="/login" />;
}

export default PrivateRoute;
