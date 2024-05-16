import logo from '../../assets/images/b2bit-logo.png';

function Login() {
  return (
    <div className="bg-zinc-50 min-h-screen flex justify-center items-center">
      <div className="bg-white p-9 rounded-xl shadow-dark shadow-[0_0_60px_15px_rgba(0,0,0,0.2)]">
        <div>
          <div className='text-center'>
            <img src={logo} alt='B2Bit' className='w-10/12 sm:w-64 mx-auto' />
          </div>

          <form className='flex flex-col items-center'>

            <label className='w-full sm:w-80 text-left text-sm mt-5 font-bold'>
              E-mail
            </label>

            <input className='w-full sm:w-80 h-12 p-2 bg-zinc-100 rounded-md outline-0 text-sm' type='text' placeholder='@gmail.com' />

            <label className='w-full sm:w-80 text-left text-sm mt-5 font-bold'>
              Password
            </label>

            <input className='w-full sm:w-80 text-sm h-12 p-2 bg-zinc-100 rounded-md outline-0' type='password' placeholder='****************' />

            <button className='font-bold w-full sm:w-80 h-12 mt-10 bg-[#02274f] hover:opacity-[0.9] text-white rounded-md transition-all'>
              Sign In
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
