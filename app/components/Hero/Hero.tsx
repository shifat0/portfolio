import DownloadButton from "./DownloadButton";
import SocialLinks from "./SocialLinks";
import ProfilePicture from "./ProfilePicture";
import TypeEffect from "./TypeEffect";

type Props = {};

const Hero = ({}: Props) => {
  return (
    <section className="container mx-auto absolute top-0 h-screen flex justify-center items-center snap-center">
      {/* Circle */}
      <div className="fixed animate-pulse w-[550px] h-[550px] md:h-1/2 md:w-1/2 border border-[#F6B17A] rounded-full shadow-[#F6B17A] shadow-lg" />

      {/* Inside the circle */}
      <div className="w-[500px] text-center flex flex-col justify-center items-center gap-4 z-50">
        {/* Profile Picture */}
        <ProfilePicture />

        {/* Title */}
        <span className="text-gray-500 uppercase tracking-[8px]">
          Full Stack Developer
        </span>

        {/* Typewriter */}
        <TypeEffect />

        {/* Social Links */}
        <SocialLinks />

        {/* Download CV Button */}
        <DownloadButton />
      </div>
    </section>
  );
};

export default Hero;
