import React from "react";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Award,
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
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Express.js",
      "Tailwind",
      "TypeScript",
      "Redux",
      "Ant Design",
    ],
    comfortable: [
      "Node.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Python",
      "Material Tailwind",
      "Next.js",
      "Postman",
    ],
    familiar: ["MaterialUI", "Flask"],
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
                MERN Stack Developer
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
                <a
                  className="text-gray-600 hover:text-blue-600 transition-transform hover:scale-110"
                  href="https://www.facebook.com/h.R4hM4n.8"
                  title="Facebook Profile"
                >
                  <Facebook size={24} />
                </a>
              </div>

              <DownloadButton />
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {/* Objective */}
              <section>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-gray-800 border-b pb-2">
                  <Award className="text-blue-600" />
                  OBJECTIVE
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Passionate Front End Web Developer with React mastery and MERN
                  stack expertise. Committed to building user-friendly,
                  responsive UIs and staying updated on industry trends to
                  create innovative, efficient solutions. Collaborative team
                  player focused on exceeding client expectations.
                </p>
              </section>

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
                      link: "https://virtual-doc-site.web.app/",
                      tech: "React.js, JavaScript, Mongoose, Material Tailwind, SSLCOMMERZ, Node.js, Express.js",
                      points: [
                        "Designed responsive user interfaces for key platform sections",
                        "Integrated SSLCommerz for seamless appointment booking",
                        "Developed dynamic comment system and BMI calculator",
                      ],
                    },
                    {
                      title: "Shine Slot",
                      link: "https://shine-slot-client.vercel.app/",
                      tech: "ReactJs, JavaScript, Redux, TypeScript, Ant Design, ExpressJs, Mongoose, JWT, AmarPay",
                      points: [
                        "User Authentication & Role-Based Access: Secure sign-up/login, role-based control",
                        "Service Management & Booking System: Browse/filter services, real-time slots",
                        "User Dashboard & Review System: Personalized dashboard, interactive reviews",
                      ],
                    },
                    {
                      title: "My Building",
                      link: "https://a-12-my-building.web.app/",
                      tech: "JavaScript, HTML, CSS, React, Firebase, Tailwind, MongoDB, Node.js, Express.js, JWT",
                      points: [
                        "Profile Management & Notifications system",
                        "Membership Automation workflow",
                        "Coupon System & comprehensive admin dashboard",
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
                        <a
                          className="text-blue-600 hover:underline inline-flex items-center gap-2 mb-2 
                                    transition-colors hover:text-blue-700"
                          href={project.link}
                        >
                          Live Demo <span>→</span>
                        </a>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">
                            Technology Used:
                          </h4>
                          <p className="text-gray-600 mb-3">{project.tech}</p>
                        </div>
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
