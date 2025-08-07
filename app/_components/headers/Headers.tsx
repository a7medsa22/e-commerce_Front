import Link from "next/link";
import Image from "next/image";
import React from "react";

import Searchbar from "./Searchbar";
import Navbar from "./Navbar";

const Headers = () => {
  return (
    <header className="bg-gray-300 shadow-md shadow-orange-600">
      <div className="mx-auto max-w-screen-xl flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Image src="/logo.svg" alt="logo" width={70} height={70} />

          {/* Navbar */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a className="text-gray-800 transition hover:text-gray-500/75" href="#">Home</a>
              </li>
              <li>
                <a className="text-gray-800 transition hover:text-gray-500/75" href="#">Explore</a>
              </li>
              <li>
                <a className="text-gray-800 transition hover:text-gray-500/75" href="#">Projects</a>
              </li>
              <li>
                <a className="text-gray-800 transition hover:text-gray-500/75" href="#">About Us</a>
              </li>
              <li>
                <a className="text-gray-800 transition hover:text-gray-500/75" href="#">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Searchbar + Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Searchbar />
          </div>

          <div className="sm:flex sm:gap-4">
            <a
              className="rounded-md bg-basic px-5 py-2.5 text-sm font-medium text-white transition hover:bg-amber-800"
              href="#"
            >
              Login
            </a>

            <a
              className="hidden sm:inline-block rounded-md bg-stone-500 px-5 py-2.5 text-sm font-medium text-orange-200 transition hover:text-orange-400"
              href="#"
            >
              Register
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2.5 bg-gray-100 text-gray-600 rounded-sm hover:text-gray-600/75">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
    </header>
  );
};

export default Headers;
