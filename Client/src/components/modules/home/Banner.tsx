"use client";

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Img from "@/src/assets/IMG_4604-2.jpg";

const PortfolioBanner = () => {
  return (
    <div>
      <div className="max-w-screen-md mx-auto p-4">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <Image
            alt="Picture of the Habib"
            className="rounded-full border-4 shadow-md hover:shadow-lg hover:scale-105 hover:animate-pulse antialiased animate-wiggle animate-fade animate-once border-spacing-2 transition-all duration-300"
            height={170}
            src={Img}
            width={170}
          />
          <div>
            <h2 className="scroll-m-20 text-3xl my-2 md:text-4xl font-extrabold tracking-tight lg:text-5xl">
              I&apos;m Habibur Rahman!
            </h2>
            <p className="text-default-600">
              <span className="font-semibold text-lg">Full Stack web developer</span> with a strong foundation in React.js and
              the MERN stack. Experienced in creating responsive, user-friendly
              web applications with clean, efficient code and modern
              technologies.
            </p>
            <div className="flex justify-center mt-4 gap-4">
              <a
                className="text-4xl text-[#0077B5]"
                href="https://www.linkedin.com/in/habiburrahman153/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin className="mr-2" />
              </a>
              <a
                className="text-4xl text-[#171515]"
                href="https://github.com/habib-153"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub className="mr-2" />
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
              <Card className="bg-primary-50/50">
                <CardBody className="text-center py-4">
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-sm text-default-600">Projects</p>
                </CardBody>
              </Card>
              <Card className="bg-primary-50/50">
                <CardBody className="text-center py-4">
                  <p className="text-2xl font-bold text-primary">1.5+</p>
                  <p className="text-sm text-default-600">Years Experience</p>
                </CardBody>
              </Card>
              <Card className="bg-primary-50/50 col-span-2 md:col-span-1">
                <CardBody className="text-center py-4">
                  <p className="text-2xl font-bold text-primary">BSc</p>
                  <p className="text-sm text-default-600">Data Science</p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default PortfolioBanner;
