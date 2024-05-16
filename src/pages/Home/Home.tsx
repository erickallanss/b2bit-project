
function Home() {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <div className='flex justify-center sm:justify-end'>
        <button className='font-bold w-full max-w-md h-12 m-5 bg-[#02274f] hover:opacity-[0.9] text-white rounded-md transition-all'>
          Logout
        </button>
      </div>
      <div className="bg-[#f1f5f9] flex flex-1 justify-center items-center">
        <div className="w-full max-w-md bg-white p-9 rounded-xl shadow-dark shadow-[0_0_10px_rgba(0,0,0,0.2)]">
          <div className='mb-5 mx-auto text-center'>
            <div className='m-2'>
              Profile picture
            </div>
            <div>
              Espaço para a foto
            </div>
          </div>
          <div>
            <form className='flex flex-col'>
              <label className='w-full text-left text-md mt-5 mb-1'>
                Your <span className='font-bold'>name</span>
              </label>
              <input className='w-full text-md py-3 px-5 bg-zinc-100 rounded-md outline-0' type='text' value={"Christine James"} disabled />

              <label className='w-full text-left text-md mt-5 mb-1'>
                Your <span className='font-bold'>E-mail</span>
              </label>
              <input className='w-full text-md py-3 px-5 bg-zinc-100 rounded-md outline-0' type='email' value={"christinejames@gmail.com"} disabled />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
