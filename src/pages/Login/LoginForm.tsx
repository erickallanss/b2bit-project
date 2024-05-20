import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { login } = useAuth();
  const [error, setError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6; 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword(password)) {
      setPasswordError('Password must be at least 6 characters long.');
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!valid) {
      return;
    }

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError('Incorrect email and/or password. Please check your email and password and try again.');
      setEmail('');
      setPassword('');
    }
  }

  return (
    <form className='flex flex-col items-center' onSubmit={handleSubmit}>
      <InputField 
        label="E-mail" 
        type="text" 
        placeholder="@gmail.com" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      {emailError && <div className='text-red-600 text-sm mt-1'>{emailError}</div>}

      <InputField 
        label="Password" 
        type="password" 
        placeholder="****************" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      {passwordError && <div className='text-red-600 text-sm mt-1'>{passwordError}</div>}
      
      {error && <div className='text-red-600 text-sm mt-2'>{error}</div>}
      
      <SubmitButton text="Sign In" />
    </form>
  );
}

export default LoginForm;
