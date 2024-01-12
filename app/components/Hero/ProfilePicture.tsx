import Image from "next/image";

type Props = {};

const ProfilePicture = ({}: Props) => {
  return (
    <Image
      src="/profile.jpg"
      width={150}
      height={150}
      className="rounded-full object-cover w-[150px] h-[150px] shadow-md"
      alt="Profile-Image"
    />
  );
};

export default ProfilePicture;
