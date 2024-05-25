import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/outline";

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

interface MobileNavProps {
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <>
      <div className="fixed  z-50 hidden w-full flex-row items-center justify-center p-4 md:flex">
        <Title title="Xue Hua" />
        <Navigation items={navItems} />
      </div>
      {isOpen ? (
        <div className="fixed z-50">
          <MobileNav setIsOpen={setIsOpen} />
        </div>
      ) : (
        <div className="fixed right-4 top-4 z-50 block md:hidden ">
          <MobileNavBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </>
  );
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <h1 className="flex items-center px-4 font-thin text-white ">{title}</h1>
  );
};

const Navigation: React.FC<NavbarProps> = ({ items }) => {
  return (
    <>
      <div className="flex rounded-full bg-zinc-800 p-3 ">
        <ul
          className="flex list-none flex-col font-thin sm:flex-row"
          key="navbar"
        >
          {items.map((item, idx) => {
            return (
              <Link to={item.url} key={idx}>
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

const MobileNavBtn: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className="rounded bg-white p-1"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Bars3Icon className="size-10 text-zinc-800" />
      </div>
    </>
  );
};

const MobileNav: React.FC<MobileNavProps> = ({ setIsOpen }) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-white">
      <ul className="list-none">
        <li
          className="flex justify-center p-4"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <XCircleIcon className="size-10 text-zinc-800" />
        </li>
        {navItems.map((item, idx) => {
          return (
            <Link to={item.url} key={idx}>
              <li
                className="p-4 text-center"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {item.title}
              </li>
            </Link>
          );
        })}
        {subNavItems.map((item, idx) => {
          return (
            <Link to={item.url} key={idx}>
              <li
                className="p-4 text-center"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
