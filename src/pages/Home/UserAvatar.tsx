import { AvatarProps } from "../../interfaces/ProfileInterfaces";

const UserAvatar: React.FC<AvatarProps> = ({ url, alt = 'Avatar pricture' }) => {
  return (
    <div className="w-full">
      <div className="w-full text-center mb-3">Profile picture</div>
      <img src={url} alt={alt} className="mx-auto w-10/12 rounded-xl" />
    </div>
  );
};

export default UserAvatar;
