import { InputFieldProps } from "../../interfaces/InputfieldInterface";

const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder, value, onChange }) => {
  return (
    <>
      <label className='w-full text-left text-sm mt-5 font-bold'>
        {label}
      </label>
      <input 
        className='w-full h-12 p-2 bg-zinc-100 rounded-md outline-0 text-sm' 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        required 
      />
    </>
  );
}

export default InputField;
