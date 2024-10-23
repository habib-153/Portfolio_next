import React from 'react';
import { Spacer } from "@nextui-org/react";
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-sm justify-center p-10 bg-background rounded-lg">
      <nav className="flex gap-4">
        <Link href="#about">About me</Link>
        <Link href="#contact">Contact</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
      </nav>
      
      <Spacer y={1} />
      
      <nav className="flex gap-4">
        <Link href="https://www.linkedin.com/in/habibur-rahman-695a3b288/" rel="noopener noreferrer" target="_blank">
          <FaLinkedin size={24} />
        </Link>
        <Link href="https://github.com/habib-153" rel="noopener noreferrer" target="_blank">
          <FaGithub size={24} />
        </Link>
        <Link href="https://www.facebook.com/h.R4hM4n.8" rel="noopener noreferrer" target="_blank">
          <FaFacebookF size={24} />
        </Link>
      </nav>
      
      <Spacer y={1} />
      
      <p className="text-foreground">
        Copyright © {new Date().getFullYear()} - All right reserved by{" "}
        <span className="text-primary font-semibold">
          Habibur Rahman
        </span>
      </p>
    </footer>
  );
};

export default Footer;