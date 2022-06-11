import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { HiOutlineSun } from "react-icons/hi";
import { IoMdMoon } from "react-icons/io";
import { ScrollContext } from "../utilities/useObserver";

interface ItemsInterface {
  id: string;
  name: string;
  link: string;
}

type ItemsType = Array<ItemsInterface>;

const NavbarItems: ItemsType = [
  { id: "-nav-item-1", name: "Projects", link: "/projects" },
  { id: "-nav-items-2", name: "Contact", link: "/contact" },
  {
    id: "-nav-items-3",
    name: "Source",
    link: "https://github.com/pandacover/portfolio-v3",
  },
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const { scrollY } = useContext(ScrollContext);
  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setDarkMode(!darkMode);
    document.querySelector("body")?.classList.toggle("dark");
    window.localStorage.setItem("dark", !darkMode);
  };

  useEffect(() => {
    const body = document.body;
    const isDarkMode = window.localStorage.getItem("dark");
    if (isDarkMode && isDarkMode === "true") {
      body.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  return (
    <div className="w-full h-12">
      <header
        className={`z-[999] ${
          scrollY < 150
            ? "bg-opacity-20 dark:bg-opacity-20"
            : "bg-opacity-80 dark:bg-opacity-80"
        } transition bg-white dark:bg-black w-[50vw] h-12 fixed flex items-center rounded-xl px-4 gap-4 backdrop-blur-lg`}
      >
        <h1 className="font-semibold text-lg flex-[0.4]">
          <Link href="/" passHref>
            <a>Luv Makin</a>
          </Link>
        </h1>
        <ul className="flex gap-4 flex-1">
          {NavbarItems.map((item) => (
            <li key={item.id}>
              <Link href={item.link} passHref>
                <a
                  className={`px-4 py-2 hover:border-b hover:border-black dark:hover:border-gray-300 hover:opacity-75 ${
                    router.asPath === item.link
                      ? "bg-emerald-200 text-black"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex-1 flex justify-end">
          {darkMode ? (
            <button
              type="button"
              onClick={(e) => toggleTheme(e)}
              className="p-[.75rem] bg-amber-200 rounded-lg text-black text-lg hover:bg-amber-400 transition"
            >
              {<HiOutlineSun />}
            </button>
          ) : (
            <button
              type="button"
              onClick={(e) => toggleTheme(e)}
              className="p-[.75rem] bg-violet-500 rounded-lg text-white text-lg hover:bg-violet-700 transition"
            >
              {<IoMdMoon />}
            </button>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
