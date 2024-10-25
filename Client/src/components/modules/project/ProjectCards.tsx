'use client'
import React from 'react';
import { Spinner } from '@nextui-org/react';

import SinglePostCard, { SinglePostCardProps } from './SingleProject';

import { useGetAllProject } from '@/src/hooks/project.hook';

const PostCards = () => {
  const { data, isLoading } = useGetAllProject();
  const projectData = data?.data;

  if(isLoading) return <Spinner className="w-full text-center"/>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {projectData?.map((project: SinglePostCardProps) => (
        <SinglePostCard key={project._id} project={project} />
      ))}
    </div>
  );
};

export default PostCards;