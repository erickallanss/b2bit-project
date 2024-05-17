import Logo from '../../components/Logo/Logo';
import LoginForm from './LoginForm';

const Login: React.FC = () => {
  return (
    <div className="bg-zinc-50 min-h-screen flex justify-center items-center">
      <div className="w-10/12 sm:w-[438px] max-h-[534px] bg-white p-9 rounded-xl shadow-dark shadow-[0_0_64px_rgba(0,0,0,0.25)]">
        <Logo />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
