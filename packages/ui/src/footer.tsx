import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import './styles.css'

interface FooterProps {
  footerTitle: string;
  builtTools: string[];
  githubLink: string;
  linkedInLink: string;
  emailLink: string;
}
export default function Footer({
  footerTitle,
  builtTools,
  githubLink,
  linkedInLink,
  emailLink,
}: FooterProps) {
  return (
    <div className="flex flex-col bg-black">
      <div>{footerTitle}</div>
      <div className="flex flex-row">
        <div>Built with -</div>
        <div>{builtTools.toString()}</div>
      </div>
      <div className="flex flex-row">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit"
        >
          <FaGithub size={24} />
        </a>
        <a
          href={linkedInLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit"
        >
          <AiFillLinkedin size={24} />
        </a>
        <a
          href={emailLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit"
        >
          <MdEmail size={24} />
        </a>
      </div>
    </div>
  );
}
