import { LogoutButtonProps } from "../../interfaces/ButtonsInterfacecs";

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  return (
    <button
      className='font-bold w-full max-w-md h-12 m-5 bg-[#02274f] hover:opacity-[0.9] text-white rounded-md transition-all'
      onClick={onLogout}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
