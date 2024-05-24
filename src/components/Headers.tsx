import React from "react";

interface MainHeaderProps {
  title: string;
  subtitle: string;
}
export const MainHeader: React.FC<MainHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-zinc-900 px-40 py-60 text-white">
      <h1 className="text-5xl">{title}</h1>
      <h2 className="text-3xl">{subtitle}</h2>
    </div>
  );
};
