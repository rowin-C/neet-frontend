import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="text-gray-600 body-font ">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link href={"/"}>
            <span className=" text-4xl honk">RankNeet</span>
          </Link>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href={"/about"}
            target="_blank"
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            About
          </Link>
          <a
            href="https://github.com/rowin-C/neet-frontend"
            target="_blank"
            className="mr-5 hover:text-gray-900 cursor-pointer"
          >
            Github
          </a>
          {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base ">
            How it's made ?
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
