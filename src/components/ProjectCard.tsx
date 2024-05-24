import React from "react";

interface ProjectCardProps {
  cover: string;
  title: string;
  company: string;
  description: string;
}
interface CoverProps {
  image: string;
}
interface DetailsProps {
  company: string;
  title: string;
  description: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  cover,
  title,
  company,
  description,
}) => {
  return (
    <div className="flex flex-col-reverse items-center justify-center py-8 text-white sm:flex-row sm:border-b">
      <Details company={company} title={title} description={description} />
      <Cover image={cover} />
    </div>
  );
};

const Cover: React.FC<CoverProps> = ({ image }) => {
  return (
    <img
      src={image}
      alt="project preview"
      className="w-full rounded opacity-75 transition-all hover:opacity-100 sm:w-1/2"
    />
  );
};

const Details: React.FC<DetailsProps> = ({ company, title, description }) => {
  return (
    <div className="flex w-full flex-col justify-center gap-2 p-2 pt-2 sm:w-1/2 sm:p-0 sm:pt-0">
      <h4>{company}</h4>
      <h1 className="text-5xl">{title}</h1>
      <h4>{description}</h4>
    </div>
  );
};
