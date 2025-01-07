"use client";

import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
        <svg
          width="275.7300079345703"
          height="65.75100189208985"
          viewBox="0 0 390 93"
          className="looka-1j8o68f"
        >
          <defs id="SvgjsDefs1189"></defs>
          <g
            id="SvgjsG1190"
            featurekey="rootContainer"
            transform="matrix(1,0,0,1,0,0)"
            fill="#ffffff"
          >
            <rect
              xmlns="http://www.w3.org/2000/svg"
              width="390"
              height="93"
              rx="10"
              ry="10"
            ></rect>
          </g>
          <g
            id="SvgjsG1191"
            featurekey="q4o0QG-0"
            transform="matrix(3.4881404502088085,0,0,3.4881404502088085,19.441896396939605,2.629060491429133)"
            fill="#2b2e4a"
          >
            <path d="M2.6 13.379999999999999 l2 -0.1 l-0.06 -2.78 l-0.5 -1.94 l-1.24 -0.1 z M3.14 5.199999999999999 l1.28 0 l2.62 0.18 l0.54 7.26 l0.2 7.24 l-0.6 0.04 l-2.26 0.1 l-0.24 0 l-0.18 -4.5 l-1.88 -0.12 l-0.5 4.6 l-1.96 0.06 l0.64 -7.48 l0.58 -4.28 l0.42 -3 z M8.82 5.26 l2.56 0.08 l2.16 10.14 l0.18 -1.06 l-0.58 -9.1 l2.22 -0.04 l0.88 0.2 l-0.4 14.4 l-1.78 0.24 l-1.78 -0.1 l-1.18 -8.78 l-0.42 -1.3 l0.06 10.04 l-2.06 0.18 l-0.1 -8.58 z M17.82 8.88 l3.2 0.08 l-0.16 2.5 l0.24 5.08 l-0.14 3.38 l-0.28 0.04 l-2.8 -0.06 l-0.12 -0.92 l-0.04 -5.36 z M17.94 4.98 l3.02 0.04 l0.14 0.78 l0 1.34 l-0.08 0.72 l-3.2 0.02 l-0.1 -1.3 l-0.04 -1.4 z M22.38 20 l0.24 -14.5 l2.38 -0.18 l1.08 0.12 l1.02 6.94 l0.6 -7.16 l4.1 0.5 c0.02 0.76 0.04 1.54 0.04 2.36 c0.08 1.38 0.18 3.18 0.18 4.84 c0.06 2.68 -0.02 4.6 0.16 7.12 l-1.76 -0.04 l-0.14 -8.98 l-0.38 -0.08 l-1 7.96 l-0.34 0.98 l-2.12 0.12 l-1.02 -8.4 l-0.6 0.14 l0.22 8.38 z M33.44 19.92 l-0.04 -6.94 l0.08 -0.74 l-0.04 -0.74 l0.1 -4.42 l0.18 -1.72 l6.5 0.12 l0.1 3.9 l-4.26 0 l-0.08 2.5 l3.26 -0.06 l0 0.22 l0.1 1.7 l-3.04 0.06 l0.1 2.96 l4.06 0.2 l0 3.08 z M49.9 5.199999999999999 l0 12.2 l1.5 0.28 l1.46 0.04 l-0.14 2.26 l-1.14 0 l-3.8 0.14 l-1.26 -0.04 l-0.26 -13.28 l0.12 -1.44 z M53.72 8.88 l3.2 0.08 l-0.16 2.5 l0.24 5.08 l-0.14 3.38 l-0.28 0.04 l-2.8 -0.06 l-0.12 -0.92 l-0.04 -5.36 z M53.839999999999996 4.98 l3.02 0.04 l0.14 0.78 l0 1.34 l-0.08 0.72 l-3.2 0.02 l-0.1 -1.3 l-0.04 -1.4 z M61.199999999999996 15 l-0.12 2.24 l0.66 0.28 l0.62 -0.12 l0.42 -0.92 l-0.1 -1.38 l-0.34 -0.98 l-0.58 -0.02 l-0.68 0 z M61.08 7.66 l0.2 4.38 l0.84 -0.12 l0.76 -0.62 l0.28 -1.34 l0.08 -1.58 l-0.94 -0.68 l-0.56 -0.08 z M62.699999999999996 20 l-4.14 0.04 l-0.32 -3.78 l0.1 -5.18 l0 -5.74 l3.78 -0.04 l1.54 0.32 l1.28 0.38 l0.24 0.44 l0.82 3.54 l-0.2 1.76 l-0.46 0.88 l-0.34 0.34 l-0.86 0.26 l0.92 0.4 l0.48 0.4 l0.5 1.92 l-0.4 3.08 l-0.86 0.7 z M69.14 7.699999999999999 l0.06 1.58 l0 2.06 l0.72 0 l0.7 -0.06 l0.46 -0.44 l0 -0.2 l0.08 -1.36 l-0.16 -1.22 l0 -0.04 l-0.22 -0.8 l-0.54 -0.24 l-1.04 0 z M69.02000000000001 5.24 l2.62 0.04 l1.24 0.14 l1.02 0.58 l0.8 1.32 l-0.26 3.86 l-0.32 0.6 l-1.18 0.38 l1.34 1 l0.36 0.98 l0 1.6 l-0.18 4.24 l-0.52 0.12 l-2.06 -0.1 l-0.1 -3.9 l-0.14 -2.06 l-0.48 -0.52 l-0.92 -0.3 l0 1.48 l0 3.72 l0.06 1.56 l-1.94 -0.02 l-0.92 0.06 l-0.32 -0.06 l0 -2.88 l0 -2.1 l0.12 -2.72 l-0.08 -4.68 l-0.04 -2.32 z M77.76 13.379999999999999 l2 -0.1 l-0.06 -2.78 l-0.5 -1.94 l-1.24 -0.1 z M78.30000000000001 5.199999999999999 l1.28 0 l2.62 0.18 l0.54 7.26 l0.2 7.24 l-0.6 0.04 l-2.26 0.1 l-0.24 0 l-0.18 -4.5 l-1.88 -0.12 l-0.5 4.6 l-1.96 0.06 l0.64 -7.48 l0.58 -4.28 l0.42 -3 z M85.96000000000001 7.699999999999999 l0.06 1.58 l0 2.06 l0.72 0 l0.7 -0.06 l0.46 -0.44 l0 -0.2 l0.08 -1.36 l-0.16 -1.22 l0 -0.04 l-0.22 -0.8 l-0.54 -0.24 l-1.04 0 z M85.84000000000002 5.24 l2.62 0.04 l1.24 0.14 l1.02 0.58 l0.8 1.32 l-0.26 3.86 l-0.32 0.6 l-1.18 0.38 l1.34 1 l0.36 0.98 l0 1.6 l-0.18 4.24 l-0.52 0.12 l-2.06 -0.1 l-0.1 -3.9 l-0.14 -2.06 l-0.48 -0.52 l-0.92 -0.3 l0 1.48 l0 3.72 l0.06 1.56 l-1.94 -0.02 l-0.92 0.06 l-0.32 -0.06 l0 -2.88 l0 -2.1 l0.12 -2.72 l-0.08 -4.68 l-0.04 -2.32 z M97.14000000000003 5.119999999999999 l3.36 0 l-2.52 8.38 l0 1.02 l-0.16 5.52 l-3.88 0.1 l0.72 -6.08 l-0.64 -0.98 l-2.44 -7.74 l3.08 -0.22 l1.36 7.52 l0.56 -1.54 z"></path>
          </g>
        </svg>
        <button
          className="sm:hidden text-gray-800 focus:outline-none z-30"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6 "
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:block absolute sm:static top-0 left-0 h-[100%] w-[100%] sm:w-auto bg-white sm:bg-transparent z-10 shadow-md sm:shadow-none`}
        >
          <ul className="flex flex-col items-end   sm:flex-row sm:space-x-4 sm:py-0 py-20 text-gray-600 items-center">
            <li>
              <Link href="/" className="block py-2 px-4 hover:text-blue-500">
                Главная
              </Link>
            </li>
            <li>
              <Link
                href="/top-anime"
                className="block py-6 px-4 hover:text-blue-500"
              >
                Топ Аниме
              </Link>
            </li>
            <li>
              <Link
                href="/last-update"
                className="block py-2 px-4 hover:text-blue-500"
              >
                Последнее обновление
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
