/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Spinner,
  Chip
} from "@nextui-org/react";
import { Github, Globe } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import parse from 'html-react-parser';

import { SinglePostCardProps } from './SingleProject';

// Custom styles for README content
const readmeStyles = {
  container: "prose dark:prose-invert max-w-none",
  heading: "text-xl font-bold mt-6 mb-4",
  paragraph: "text-default-700 mb-4",
  link: "text-primary hover:underline",
  list: "list-disc list-inside mb-4",
  code: "bg-default-100 rounded px-1 py-0.5 font-mono text-sm",
  codeBlock: "bg-default-100 rounded-lg p-4 my-4 font-mono text-sm overflow-x-auto"
};

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: SinglePostCardProps;
}

interface ComponentProps {
  node?: any; // Make node optional
  [key: string]: any;
}

interface CodeProps extends ComponentProps {
  inline?: boolean; // Make inline optional
}

// interface CodeProps {
//   node: any; // You might want to replace 'any' with a more specific type if you know it
//   inline: boolean;
//   [key: string]: any; // This allows for any additional props
// }

const ProjectDetailsModal = ({ isOpen, onClose, project }: ProjectModalProps)  => {
  const [readme, setReadme] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchReadme = async () => {
      if (!project?.githubUrl?.[0]) return;

      try {
        setLoading(true);
        const urlParts = project.githubUrl[0].split('/');
        const owner = urlParts[3];
        const repo = urlParts[4];
        
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/readme`,
          {
            headers: {
              Accept: 'application/vnd.github.raw'
            }
          }
        );
        
        if (!response.ok) throw new Error('README not found');
        const readmeContent = await response.text();

        setReadme(readmeContent);
      } catch (error) {
        //console.error('Error fetching README:', error);
        setReadme('Failed to load README content.');
      } finally {
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchReadme();
      setCurrentImageIndex(0);
    }
  }, [isOpen, project]);

  // Custom components for ReactMarkdown
  const components = {
    h1: ({ node, ...props }: ComponentProps) => <h1 {...props} className={readmeStyles.heading}>{props.children}</h1>,
    h2: ({ node, ...props }: ComponentProps) => <h2 {...props} className={readmeStyles.heading}>{props.children}</h2>,
    h3: ({ node, ...props }: ComponentProps) => <h3 {...props} className={`${readmeStyles.heading} text-lg`}>{props.children}</h3>,
    p: ({ node, ...props }: ComponentProps) => <p {...props} className={readmeStyles.paragraph} />,
    a: ({ node, ...props }: ComponentProps) => <a {...props} className={readmeStyles.link} rel="noopener noreferrer" target="_blank">{props.children}</a>,
    ul: ({ node, ...props }: ComponentProps) => <ul {...props} className={readmeStyles.list} />,
    ol: ({ node, ...props }: ComponentProps) => <ol {...props} className="list-decimal list-inside mb-4" />,
    code: ({ node, inline, ...props }: CodeProps) =>
      inline ? (
        <code {...props} className={readmeStyles.code} />
      ) : (
        <div className={readmeStyles.codeBlock}>
          <code {...props} />
        </div>
      ),
  };

  if (!project) return null;

  return (
    <Modal 
      className="dark:bg-background" 
      isOpen={isOpen}
      scrollBehavior="inside"
      size="4xl"
      onClose={onClose}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <div className="flex gap-2">
              {project.featured && (
                <Chip 
                  className="bg-warning-100 text-warning-800"
                  size="sm"
                >
                  Featured
                </Chip>
              )}
              {project.incomplete && (
                <Chip color="danger" size="sm">
                  Incomplete
                </Chip>
              )}
            </div>
          </div>
          <p className="text-small text-default-500">
            Published: {new Date(project.published).toLocaleDateString()}
          </p>
        </ModalHeader>

        <ModalBody>
          <div className="space-y-6">
            {/* Project Images Carousel */}
            {project.images?.length > 0 && (
              <div className="relative w-full h-96 bg-default-100 rounded-lg overflow-hidden">
                <img
                  alt={`${project.title} - ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                  src={project.images[currentImageIndex]}
                />
                
                {project.images.length > 1 && (
                  <>
                    <Button
                      isIconOnly
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-background/40 hover:bg-background/60"
                      size="sm"
                      onClick={() => setCurrentImageIndex(prev => 
                        prev === 0 ? project.images.length - 1 : prev - 1
                      )}
                    >
                      ←
                    </Button>
                    <Button
                      isIconOnly
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-background/40 hover:bg-background/60"
                      size="sm"
                      onClick={() => setCurrentImageIndex(prev => 
                        prev === project.images.length - 1 ? 0 : prev + 1
                      )}
                    >
                      →
                    </Button>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                      {project.images.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            index === currentImageIndex 
                              ? 'bg-primary' 
                              : 'bg-default-300'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Project Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Description</h3>
              <div className="text-default-700">
                {parse(project.description)}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h4 className="font-medium mb-2">Technologies & Tags:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags?.map((tag, index) => (
                  <Chip 
                    key={index}
                    className="bg-primary-100 text-primary-800"
                    size="sm"
                  >
                    {tag}
                  </Chip>
                ))}
              </div>
            </div>

            {/* GitHub README */}
            {project.githubUrl?.[0] && (
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">README</h3>
                <div className="p-6 bg-default-50 rounded-lg">
                  {loading ? (
                    <div className="flex justify-center py-8">
                      <Spinner color="primary" />
                    </div>
                  ) : (
                    <div className={readmeStyles.container}>
                      <ReactMarkdown components={components}>
                        {readme}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </ModalBody>

        <ModalFooter>
          <div className="flex gap-3 w-full">
            <Button
              color="default"
              variant="light"
              onPress={onClose}
            >
              Close
            </Button>
            <div className="flex-grow" />
            {project.githubUrl?.[0] && (
              <Button
                as="a"
                color="primary"
                href={project.githubUrl[0]}
                rel="noopener noreferrer"
                startContent={<Github size={16} />}
                target="_blank"
              >
                View Source
              </Button>
            )}
            {project.liveUrl && (
              <Button
                as="a"
                color="primary"
                href={project.liveUrl}
                rel="noopener noreferrer"
                startContent={<Globe size={16} />}
                target="_blank"
              >
                Live Demo
              </Button>
            )}
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectDetailsModal;