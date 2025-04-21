import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom"; 

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        localStorage.setItem("darkMode", darkMode);
        document.body.classList.toggle("dark", darkMode);
    }, [darkMode]);


    const location = useLocation();
    useEffect(() => {
        if (window.innerWidth < 768) {
            setMenuOpen(false);
        }
    }, [location.pathname]);

    return (
        <nav className="bg-blue-300 dark:bg-white relative flex justify-between sm:justify-around p-2 items-center cursor-pointer border-b-2 border-[#21acff] shadow-md shadow-blue-200 dark:shadow-red-400">
            <div className="flex justify-center items-center gap-6">
                <NavLink to="/" className="w-20">
                    <img
                        src="/images/Team logo.png"
                        alt="Logo"
                        className="w-full max-w-full object-cover hover:opacity-60 zoom-target transition-all duration-300 ease-in-out"
                    />
                </NavLink>

                <ul
                    className={`md:flex  md:gap-6 ${menuOpen ? "block" : "hidden"
                        } space-y-8 md:space-y-0 absolute md:static top-[70px] left-0 w-full md:w-auto h-[100vh] md:h-auto bg-blue-300 dark:bg-white md:bg-transparent py-3 px-1 lg:p-0 z-10`}
                >
                    {menuOpen && (
                        <div
                            className="md:hidden  hover:text-red-400 transition duration-500 ease-in-out flex justify-end items-center mr-2 pb-2"
                            onClick={toggleMenu}
                        >
                            <FaTimes size={20} className="zoom-target" />
                        </div>
                    )}

                    {[
                        { to: "/", label: "Home" },
                        { to: "/about", label: "About" },
                        { to: "/contact", label: "Contact" },
                        { to: "/blog", label: "Blog" },
                    ].map(({ to, label }) => (
                        <li key={label} className="p-4 sm:p-0">
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `${isActive ? "text-red-400 underline underline-offset-[10px]" : ""
                                    } px-2 text-lg hover:text-red-400 hover:underline hover:underline-offset-[10px] transition-all duration-300 ease-in-out zoom-target`
                                }
                            >
                                {label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex justify-center items-center gap-4 zoom-target">
                {!menuOpen && (
                    <div
                        className="md:hidden  hover:text-red-400 transition duration-500 ease-in-out zoom-target"
                        onClick={toggleMenu}
                    >
                        <FaBars size={25} />
                    </div>
                )}

                <button
                    onClick={toggleDarkMode}
                    className="text-2xl hover:text-red-400 transition duration-700 ease-in-out zoom-target"
                >
                    {darkMode ? <IoSunnySharp /> : <IoMoonSharp />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
