import Link from "next/link";
import type { CustomLinkProps } from "./types";

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-blue-400 hover:underline text-sm"
    >
      {children}
    </Link>
  );
};

export default CustomLink;
