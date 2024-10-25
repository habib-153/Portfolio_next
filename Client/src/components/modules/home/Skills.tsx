'use client'
import React from 'react';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { Divider } from '@nextui-org/divider';
import { Skeleton } from '@nextui-org/skeleton';

import { useGetAllSkills } from '@/src/hooks/skill.hook';
import { ISkill } from '@/src/types';

const Skills = () => {
  const { data: skills, isLoading } = useGetAllSkills();

  const groupedSkills: { [key in 'Language' | 'Framework' | 'Database' | 'Others']?: ISkill[] } | undefined = skills?.data?.reduce((acc: { [key in 'Language' | 'Framework' | 'Database' | 'Others']?: ISkill[] }, skill: ISkill) => {
    if (!acc[skill.type as 'Language' | 'Framework' | 'Database' | 'Others']) {
      acc[skill.type as 'Language' | 'Framework' | 'Database' | 'Others'] = [];
    }
    acc[skill.type as 'Language' | 'Framework' | 'Database' | 'Others']!.push(skill);

    return acc;
  }, {});

  const sectionTitles = {
    'Language': 'Programming Languages',
    'Framework': 'Frameworks',
    'Database': 'Databases',
    'Others': 'Others'
  };

  const sectionDescriptions = {
    'Language': 'I am proficient in the following programming languages and always eager to explore new ones: 🚀',
    'Framework': 'I am a fast learner, able to quickly adapt to new frameworks across various tech stacks. Here are some I\'ve worked with: 🚀',
    'Database': 'I have experience working with various databases and data technologies:',
    'Others': 'I have experience working with various other tools and technologies. Here are some of them: 🚀'
  };

  const SkillIcon = ({ skill }: { skill: ISkill }) => (
    <Card className="group w-24 h-24 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-200 bg-transparent">
      <CardBody className="flex flex-col items-center gap-2 p-2">
        <Image
          alt={skill.name}
          className="object-contain"
          height={50}
          src={skill.logo}
          width={50}
        />
        <span className="text-xs text-center text-default-600">{skill.name}</span>
      </CardBody>
    </Card>
  );

  const Section = ({ type, skills }: { type: keyof typeof sectionTitles; skills: ISkill[] }) => (
    <Card className="w-full shadow-none my-2">
      <CardHeader className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold text-center w-full">
          {sectionTitles[type]}
        </h2>
        <p className="text-sm text-center text-default-600">
          {sectionDescriptions[type]}
        </p>
      </CardHeader>
      <Divider />
      <CardBody className=''>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {skills?.map((skill, index) => (
            <SkillIcon key={index} skill={skill} />
          ))}
        </div>
      </CardBody>
    </Card>
  );

  const sectionOrder = ['Language', 'Framework', 'Database', 'Others'];

  return (
    <div className='max-w-screen-md mx-auto p-4' id='skills'>
      {isLoading ? (
        <div>
          {sectionOrder.map((type) => (
            <div key={type} className="mb-4">
              <h2 className="text-2xl font-bold text-center w-full mb-2">
                {sectionTitles[type as 'Language' | 'Framework' | 'Database' | 'Others']}
              </h2>
              <p className="text-sm text-center text-default-600 mb-4">
                {sectionDescriptions[type as 'Language' | 'Framework' | 'Database' | 'Others']}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 justify-items-center">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Skeleton key={index} className="w-24 h-24 rounded-lg" />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        groupedSkills && sectionOrder.map((type) => (
          groupedSkills[type as 'Language' | 'Framework' | 'Database' | 'Others'] && (
            <Section
              key={type}
              skills={groupedSkills[type as 'Language' | 'Framework' | 'Database' | 'Others'] || []}
              type={type as 'Language' | 'Framework' | 'Database' | 'Others'}
            />
          )
        ))
      )}
    </div>
  );
};

export default Skills;