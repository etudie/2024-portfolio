import React from "react";

interface MainDividerProps {
  content: string;
}
export const MainDivider: React.FC<MainDividerProps> = ({ content }) => {
  return <h1 className="text-center text-8xl text-white">{content}</h1>;
};
