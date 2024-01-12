import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faHackerrank,
  faLinkedin,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

type Props = {};

const SocialLinks = ({}: Props) => {
  return (
    <ul className="flex items-center gap-8 mt-8">
      <Link href="https://www.facebook.com/shifat001/">
        <li>
          <FontAwesomeIcon icon={faFacebook} className="text-xl" />
        </li>
      </Link>
      <Link href="https://github.com/shifat0">
        <li>
          <FontAwesomeIcon icon={faGithub} className="text-xl" />
        </li>
      </Link>
      <Link href="https://www.linkedin.com/in/md-shoaib-akhter-shifat/">
        <li>
          <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
        </li>
      </Link>
      <Link href="https://twitter.com/SifatKh86893561">
        <li>
          <FontAwesomeIcon icon={faTwitter} className="text-xl" />
        </li>
      </Link>
      <Link href="https://stackoverflow.com/users/15989016/md-shoaib-akhter-shifat">
        <li>
          <FontAwesomeIcon icon={faStackOverflow} className="text-xl" />
        </li>
      </Link>
      <Link href="https://www.hackerrank.com/profile/shifat0">
        <li>
          <FontAwesomeIcon icon={faHackerrank} className="text-xl" />
        </li>
      </Link>
    </ul>
  );
};

export default SocialLinks;
