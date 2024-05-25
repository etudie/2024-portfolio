import React from "react";

interface Card1Props {
  preview: string;
  content: React.ReactNode;
  links: links[];
  title: string;
}
interface links {
  url: string;
  title: string;
}
export const Card1: React.FC<Card1Props> = ({
  preview,
  content,
  links,
  title,
}) => {
  return (
    <div className="flex flex-col py-10 text-white md:flex-row md:px-40">
      <div className="opacity-60 hover:opacity-100 md:w-1/5">
        <img src={preview} alt="preview" className="w-full rounded" />
      </div>
      <div className="flex-1 p-10 pt-0">
        <h3 className="pb-3 text-3xl">{title}</h3>
        <span className="leading-8">{content}</span>
      </div>
      <div className="md:w-1/5">
        {links.map((link, idx) => (
          <button
            className="m-1 w-full rounded-full bg-white p-3 text-zinc-950"
            key={idx}
            onClick={() => {
              window.location.href = link.url;
            }}
          >
            {link.title}
          </button>
        ))}
      </div>
    </div>
  );
};
