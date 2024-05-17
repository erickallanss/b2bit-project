import { SubmitButtonProps } from "../../interfaces/ButtonsInterfacecs";

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <button 
      className=' w-full h-12 mt-10 bg-[#02274f] hover:opacity-[0.9] text-white font-bold rounded-md transition-all' 
      type='submit'
    >
      {text}
    </button>
  );
}

export default SubmitButton;
