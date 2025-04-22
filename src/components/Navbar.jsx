import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { SiSuperuser } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);

    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-black z-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-4xl font-bold text-gray-800 dark:text-[var(--color-text-light)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)]"
            >
              {/* <SiSuperuser /> */}
              😵‍💫
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex space-x-4 mr-4.5">
              {/* <Link
                to="/"
                className="text-gray-700 dark:text-[var(--color-text-light)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)]"
              >
                Home
              </Link> */}
              <Link
                to="/about"
                className="text-gray-700 dark:text-[var(--color-text-light)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)]"
              >
                about
              </Link>
              <Link
                to="/blogs"
                className="text-gray-700 dark:text-[var(--color-text-light)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)]"
              >
                blogs
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/simxrsxndhu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-[var(--color-text-light)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)]"
              >
                <FaGithub className="w-7 h-7" />
              </a>
              <a
                href="https://www.linkedin.com/in/simarpreet-sandhu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-[var(--color-text-light)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)]"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>
              <button
                onClick={toggleTheme}
                className="text-gray-700 cursor-pointer dark:text-[var(--color-text-light)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)]"
              >
                {isDark ? (
                  <FaMoon className="w-6 h-6" />
                ) : (
                  <IoSunnyOutline className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-5 md:hidden">
            <button
              onClick={toggleTheme}
              className="text-gray-700 cursor-pointer dark:text-[var(--color-text-light)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)]"
            >
              {isDark ? (
                <FaMoon className="w-6 h-6" />
              ) : (
                <IoSunnyOutline className="w-7 h-7" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 cursor-pointer dark:text-[var(--color-text-light)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] z-50"
            >
              {isOpen ? (
                <FaTimes className="w-7 h-7" />
              ) : (
                <FaBars className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-40"
          onClick={toggleMenu}
        >
          <div
            className="fixed inset-y-0 right-0 w-full bg-white dark:bg-black shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col"
            ref={menuRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-1 flex flex-col justify-center items-center p-6 space-y-8">
              <div className="space-y-8 text-center">
                {/* <Link
                  to="/"
                  className="block text-lg text-gray-700 dark:text-[var(--color-text-light)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)]"
                  onClick={toggleMenu}
                >
                  Home
                </Link> */}
                <Link
                  to="/about"
                  className="block text-3xl text-gray-700 dark:text-[var(--color-text-light)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)]"
                  onClick={toggleMenu}
                >
                  about
                </Link>
                <Link
                  to="/blogs"
                  className="block text-3xl text-gray-700 dark:text-[var(--color-text-light)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)]"
                  onClick={toggleMenu}
                >
                  blogs
                </Link>
              </div>

              <div className="flex pt-4 justify-center space-x-8">
                <a
                  href="https://github.com/simxrsxndhu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-[var(--color-text-light)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)]"
                >
                  <FaGithub className="w-13 h-13" />
                </a>
                <a
                  href="www.linkedin.com/in/simarpreet-sandhu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-[var(--color-text-light)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)]"
                >
                  <FaLinkedin className="w-13 h-13" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
