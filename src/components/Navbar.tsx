import React, { useState } from "react";
import { Link } from "react-router-dom";

interface TitleProps {
  title: string;
}

interface NavbarProps {
  items: navItemsType[];
}

interface navItemsType {
  title: string;
  url: string;
}

const navItems: navItemsType[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Services",
    url: "/#services",
  },
  {
    title: "Projects",
    url: "/#featured",
  },
  {
    title: "About",
    url: "/#about",
  },
  {
    title: "Contact",
    url: "/#contact",
  },
];

const subNavItems: navItemsType[] = [
  {
    title: "Involvement",
    url: "/involvement",
  },
  {
    title: "Mentorship",
    url: "/mentorship",
  },
  {
    title: "All Projects",
    url: "/projects",
  },
];

export const Navbar = () => {
  return (
    <div className="fixed z-50 flex w-full flex-row items-center justify-center p-4">
      <Title title="Xue Hua" />
      <Navigation items={navItems} />
    </div>
  );
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 className="flex items-center px-4 font-thin text-white">{title}</h1>
  );
};

const Navigation: React.FC<NavbarProps> = ({ items }) => {
  return (
    <>
      <div className="flex rounded-full bg-zinc-800 p-3">
        <ul
          className="flex list-none flex-col font-thin sm:flex-row"
          key="navbar"
        >
          {items.map((item, idx) => {
            return (
              <Link to={item.url}>
                <li
                  key={idx}
                  className="px-4 py-1 text-white transition-all hover:rounded-full hover:bg-white hover:text-zinc-800"
                >
                  {item.title}
                </li>
              </Link>
            );
          })}
          <SubNav />
        </ul>
      </div>
    </>
  );
};

const SubNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <li
        onMouseEnter={() => {
          setIsOpen(true);
        }}
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
        <p
          className={`cursor-pointer rounded-full px-4 py-1 text-white transition-all hover:bg-white hover:text-zinc-800 ${isOpen && "bg-white text-zinc-800"}`}
        >
          Beyond
        </p>

        <ul className={`fixed ${isOpen ? "block" : "hidden"}`}>
          {subNavItems.map((item, idx) => {
            return (
              <a href={item.url}>
                <li
                  className=" my-0.5 rounded-full bg-white px-4 py-1 hover:bg-zinc-800 hover:text-white"
                  key={idx}
                >
                  {item.title}
                </li>
              </a>
            );
          })}
        </ul>
      </li>
    </>
  );
};
