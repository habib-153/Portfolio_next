import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code,
  Briefcase,
  GraduationCap,
  Languages,
  Trophy,
} from "lucide-react";
import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/react";

import DownloadButton from "@/src/components/modules/home/DownloadButton";

const Resume = () => {
  const skills = {
    expertise: [
      "React.js",
      "TypeScript",
      "Redux",
      "HTML",
      "CSS",
      "JavaScript",
      "Express.js",
      "Tailwind",
      "Ant Design",
    ],
    comfortable: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Material Tailwind",
      "RTK Query",
    ],
    familiar: ["Material UI", "Framer motion", "Lottie", "Firebase"],
    tools: ["Postman", "VS Code", "Nodemon", "MongoDB Compass", "Git"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 relative">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-100 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative">
        <Card className="border-none shadow-xl bg-white/90 backdrop-blur">
          <CardBody className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                HABIBUR RAHMAN
              </h1>
              <h2 className="text-xl text-gray-600 mb-6">
                Full Stack Developer
              </h2>

              <div className="flex flex-wrap justify-center gap-6 mb-6 text-gray-600">
                <a
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                  href="mailto:h.r.sihab155@gmail.com"
                >
                  <Mail size={18} />
                  <span>h.r.sihab155@gmail.com</span>
                </a>
                <a
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                  href="tel:+8801575632219"
                >
                  <Phone size={18} />
                  <span>+8801575632219</span>
                </a>
                <span className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>Matikata, Dhaka Cantonment, Dhaka, Bangladesh</span>
                </span>
              </div>

              <div className="flex justify-center gap-6 mb-8">
                <a
                  className="text-gray-600 hover:text-blue-600 transition-transform hover:scale-110"
                  href="https://github.com/habib-153"
                  title="GitHub Profile"
                >
                  <Github size={24} />
                </a>
                <a
                  className="text-gray-600 hover:text-blue-600 transition-transform hover:scale-110"
                  href="https://www.linkedin.com/in/habibur-rahman-695a3b288/"
                  title="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </a>
              </div>

              <DownloadButton />
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {/* Skills */}
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-800 border-b pb-2">
                  <Code className="text-blue-600" />
                  SKILLS
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg text-gray-700 font-semibold mb-3">
                      Technical Skills
                    </h3>
                    {Object.entries(skills).map(([category, items]) => (
                      <div key={category} className="mb-4">
                        <h4 className="font-medium text-gray-700 mb-2">
                          •{" "}
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                          :
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {items.map((skill) => (
                            <Chip
                              key={skill}
                              className="bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                              variant="shadow"
                            >
                              {skill}
                            </Chip>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-800 border-b pb-2">
                  <Briefcase className="text-blue-600" />
                  PROJECTS
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "VirtualDoc (Team Project)",
                      description:
                        "Developed a user-friendly platform for virtual doctor consultations with secure video conferencing, enabling convenient appointment booking with secure payment integration and fostering patient engagement through interactive features.",
                      links: {
                        live: "https://virtual-doc-site.web.app/",
                        client: "https://github.com/TeamTechTitans/VirtualDoc",
                        server:
                          "https://github.com/TeamTechTitans/VirtualDoc-Backend",
                      },
                      tech: "React.js, JavaScript, Mongoose, Material Tailwind, SSLCOMMERZ, Node.js, Express.js",
                      points: [
                        "Designed responsive user interfaces for key platform sections, including home page, tips management, dashboard etc.",
                        "Integrated SSLCommerz for seamless and secure appointment booking with payments.",
                        "Developed some sections like dynamic comment for user interaction, BMI calculation.",
                      ],
                    },
                    {
                      title: "Shine Slot",
                      description:
                        "A Car Wash Booking System, also a user-friendly web application designed to simplify the car wash booking process. It  provides an intuitive interface for users to browse services, book appointments, and manage their bookings.",
                      links: {
                        live: "https://shine-slot-client.vercel.app/",
                        client: "https://github.com/habib-153/ShineSlot_Client",
                        server:
                          "https://github.com/habib-153/A3_V1_CarWashingSystem",
                      },

                      tech: "ReactJs, JavaScript, Redux, TypeScript, Prettier, Ant Design, ExpressJs, Mongoose, JWT, AmarPay.",
                      points: [
                        "User Authentication & Role-Based Access: Secure sign-up/login, role-based control",
                        "Service Management & Booking System:  Browse/filter  services, real-time slots, integrated payment, admin dashboard.",
                        "User Dashboard & Review System:   Personalized dashboard,  interactive reviews, booking countdown timers",
                      ],
                    },
                    {
                      title: "DestinyDiary",
                      description:
                        "DestinyDiary is a vibrant community platform where travel enthusiasts can Share personal travel stories and experiences,  Exchange valuable tips and destination guides. Connect and interact with fellow travelers.",
                      links: {
                        live: "https://destiny-diary.vercel.app/",
                        client: "https://github.com/habib-153/DestinyDiary",
                        server: "https://github.com/habib-153/DestinyDiary",
                      },
                      tech: "NextJs, TypeScript, Tailwind, MongoDb, Mongoose, Node.js, Express.js, jwt, Lodash, AmarPay, NextUi",
                      points: [
                        "Integrated rich text editors for travel guides and Aamarpay payment system for premium features",
                        "Implemented user profiles with verification badges and role-based access control",
                        "Developed responsive UI with Tailwind CSS including advanced search and admin dashboard",
                      ],
                    },
                  ].map((project) => (
                    <Card
                      key={project.title}
                      className="hover:shadow-lg transition-shadow dark:bg-transparent"
                    >
                      <CardBody className="p-6">
                        <h3 className="text-xl dark:text-gray-700 font-semibold mb-2">
                          {project.title}
                        </h3>

                        {/* Project Description */}
                        <p className="text-gray-600 mb-4">
                          {project.description}
                        </p>

                        {/* Links Section */}
                        {project.links && (
                          <div className="flex gap-4 mb-4">
                            <a
                              className="text-blue-600 hover:underline inline-flex items-center gap-1 text-sm"
                              href={project.links.live}
                            >
                              Live Demo <span>→</span>
                            </a>
                            <a
                              className="text-blue-600 hover:underline inline-flex items-center gap-1 text-sm"
                              href={project.links.client}
                            >
                              Client-Side <span>→</span>
                            </a>
                            {project.links.server && (
                              <a
                                className="text-blue-600 hover:underline inline-flex items-center gap-1 text-sm"
                                href={project.links.server}
                              >
                                Server-Side <span>→</span>
                              </a>
                            )}
                          </div>
                        )}

                        {/* Technology Section */}
                        <div className="mb-4">
                          <h4 className="font-medium text-gray-700 mb-2">
                            Technology Used:
                          </h4>
                          <p className="text-gray-600">{project.tech}</p>
                        </div>

                        {/* Key Features Section */}
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">
                            Key Features:
                          </h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {project.points.map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Rest of the sections remain similar but wrapped in Card components */}
              {/* Education */}
              <Card className="dark:bg-transparent">
                <CardBody className="p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-800 border-b pb-2">
                    <GraduationCap className="text-blue-600" />
                    EDUCATION
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg dark:text-gray-700 font-semibold">
                        BSc in Data Science
                      </h3>
                      <p className="text-gray-600">
                        United International University
                      </p>
                      <p className="text-gray-500">2023 - 2027 (Expected)</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
              <Card className="dark:bg-transparent">
                <CardBody className="p-6 ">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-800 border-b pb-2">
                    <Trophy className="text-blue-600" />
                    EXTRACURRICULAR ACTIVITY
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg dark:text-gray-700 font-semibold">
                        Secretary of Programming
                      </h3>
                      <p className="text-gray-600">
                        BAF Shaheen College Dhaka Information Technology Club
                      </p>
                      <p className="text-gray-500">2021 - 2022</p>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Languages */}
              <Card className="dark:bg-transparent">
                <CardBody className="p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-800 border-b pb-2">
                    <Languages className="text-blue-600" />
                    LANGUAGES
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium dark:text-gray-700">
                        Bengali
                      </span>
                      <Chip color="success">Proficient</Chip>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium dark:text-gray-700">
                        English
                      </span>
                      <Chip color="primary">Advanced</Chip>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
