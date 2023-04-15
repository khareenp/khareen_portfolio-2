import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const SocialLinks = () => {
  const links = [
    {
      id: 1,
      media: (
        <>
          LinkedIn
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/khareen-francis-proverbs-57bb948a/",
      style: "rounded-tr-md bg-sky-500",
    },
    {
      id: 2,
      media: (
        <>
          Github
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/khareenp",
      style: "bg-gray-50",
    },
    {
      id: 3,
      media: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:foo@gmail.com",
      style: "bg-green-500",
    },
    {
      id: 4,
      media: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md bg-orange-500",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        {links.map(({ id, media, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-gray-800 "
              download={download}
              target="_blank" //allow download new tab
              rel="noreferrer"
            >
              {media}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
