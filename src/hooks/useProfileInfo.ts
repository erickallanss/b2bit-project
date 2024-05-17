import { useState, useEffect } from 'react';
import api from '../services/api';
import { ProfileData } from '../interfaces/ProfileInterfaces';

const useProfile = () => {
  const [profile, setProfile] = useState<ProfileData>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('auth/profile/');
        setProfile(response.data);
      } catch (err) {
        setError('Error: Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return { profile, loading, error };
};

export default useProfile;
