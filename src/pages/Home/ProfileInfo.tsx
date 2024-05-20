import React from 'react';
import UserAvatar from './UserAvatar';
import { ProfileData } from '../../interfaces/ProfileInterfaces';

const ProfileInfo: React.FC<ProfileData> = ({ name, email, avatar }) => {
  return (
    <div className="w-full max-w-md bg-white p-9 rounded-xl shadow-dark shadow-[0_0_10px_rgba(0,0,0,0.2)]">
      <UserAvatar url={avatar.high} alt={'Profile picture'} />
      <div>
        <form className='flex flex-col'>
          <label className='w-full text-left text-md mt-5 mb-1'>
            Your <span className='font-bold'>Name</span>
          </label>
          <input
            className='w-full text-md py-3 px-5 bg-zinc-100 rounded-md outline-0'
            type='text'
            value={name}
            disabled
          />
          <label className='w-full text-left text-md mt-5 mb-1'>
            Your <span className='font-bold'>E-mail</span>
          </label>
          <input
            className='w-full text-md py-3 px-5 bg-zinc-100 rounded-md outline-0'
            type='email'
            value={email}
            disabled
          />
        </form>
      </div>
    </div>
  );
}

export default ProfileInfo;
