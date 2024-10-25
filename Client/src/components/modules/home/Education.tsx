'use client';
import React from 'react';
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardBody, CardHeader } from '@nextui-org/card';

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: "B.Sc. in Data Science (BSDS)",
      institution: "United International University",
      location: "Dhaka, Bangladesh",
      duration: "2023 - 2027(Expected)",
      achievements: ["CGPA: 3.47", ],
      description: "Specialized in Data Science, Data Analytics and machine learning applications."
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "BAF Shaheen College Dhaka",
      location: "Dhaka, Bangladesh",
      duration: "2020 - 2022",
      achievements: ["GPA:5.00", "Secretary of Programming In SDITC"],
      description: "Core focus on Science subjects and Programming."
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const lineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4">Education Journey</h2>
        <p className="light:text-gray-600">My academic path and achievements</p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <motion.div
          animate="visible"
          className="absolute left-[15px] md:left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-400 to-blue-500 h-full"
          initial="hidden"
          variants={lineVariants}
        />

        <div className="space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 relative`}
              custom={index}
              initial="hidden"
              variants={cardVariants}
              viewport={{ once: true }}
              whileInView="visible"
            >
              {/* Timeline dot */}
              <motion.div
                animate={{ scale: 1 }}
                className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-emerald-500 z-10"
                initial={{ scale: 0 }}
                transition={{ delay: index * 0.3, duration: 0.5 }}
              >
                <GraduationCap className="w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-emerald-500" />
              </motion.div>

              <Card
                isPressable
                className={`w-full md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                } shadow-lg hover:shadow-xl transition-shadow`}
              >
                <CardHeader className="flex gap-3 bg-gradient-to-r from-emerald-500 to-blue-500 p-4">
                  <div className="flex flex-col text-center w-full text-white">
                    <p className="text-lg font-bold">{edu.degree}</p>
                    <p className="text-small">{edu.institution}</p>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-[#b2b5ba]">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-[#b2b5ba]">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2 dark:text-[#b2b5ba]">
                          <Award className="w-4 h-4 text-emerald-500" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-[#b2b5ba]">{edu.description}</p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;