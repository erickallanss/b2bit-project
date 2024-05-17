import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import ProfileInfo from './ProfileInfo';
import useProfile from '../../hooks/useProfileInfo';

const Home: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { profile, loading, error } = useProfile();


  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='animate-spin'>
          Loading...
        </div>
      </div>

    )
  }

  if (error) {
    <div className='w-full min-h-screen flex justify-center items-center'>
    <div className=''>
      Erro: {error}
    </div>
  </div>
  }

  return (
    <div className='w-full min-h-screen flex flex-col'>
      <div className='flex justify-center sm:justify-end'>
        <LogoutButton onLogout={handleLogout} />
      </div>
      <div className="bg-[#f1f5f9] flex flex-1 justify-center items-center">
        {profile && (
        <ProfileInfo 
          name={profile.name ?? 'Nome não disponível'} 
          email={profile?.email ?? "Email não disponível."} 
          avatar={profile.avatar ?? "Avatar não disponível."}
        /> 
        )}

      </div>
    </div>
  );
}

export default Home;
