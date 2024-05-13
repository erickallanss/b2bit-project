import './App.css';

function App() {
  return (
    <div className="bg-zinc-50 min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 sm:p-9 rounded-xl shadow-dark shadow-[0_0_60px_15px_rgba(0,0,0,0.2)]">
        <div>
          <div className='text-center text-6xl sm:text-8xl font-black'>
            <span className='text-blue-900'>b2b</span><span className='' style={{ color: "#fdcf00" }}>it</span>
          </div>

          <form className='flex flex-col items-center'>

            <div className='w-full sm:w-80 text-left text-sm mt-5 font-bold'>
              E-mail
            </div>

            <input className='w-full sm:w-80 h-12 p-2 bg-zinc-100 rounded-md outline-0 text-sm' type='text' placeholder='@gmail.com' />

            <div className='w-full sm:w-80 text-left text-sm mt-5 font-bold'>
              Password
            </div>

            <input className='w-full sm:w-80 text-sm h-12 p-2 bg-zinc-100 rounded-md outline-0' type='password' placeholder='************' />

            <button className='font-bold w-full sm:w-80 h-12 mt-10 bg-blue-900 text-white rounded-md hover:bg-blue-950 transition-all'>
              Sign In
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
