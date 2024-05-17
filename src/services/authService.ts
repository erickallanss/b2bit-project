import api from './api';

export const login = async (email: string, password: string) => {
  const response = await api.post('auth/login/', { email, password });

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error('Authentication error. Try again.');
  }
}
