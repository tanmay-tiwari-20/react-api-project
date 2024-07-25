import React from "react";

const Nav = () => {
  return (
    <nav className="w-[15%] h-full bg-gray-900 flex flex-col items-center pt-5">
      <a
        className="py-3 px-5 border border-zinc-700 rounded-full bg-zinc-700 text-white font-semibold hover:scale-105"
        href="/create"
      >
        Add New Product
      </a>
      <hr className="w-[80%] my-3" />
      <h1 className="text-xl font-semibold text-white w-[80%] mb-3">
        Category Filter
      </h1>
      <ul className="w-[80%] text-white">
        <li className="mb-5 bg-zinc-700 rounded-full px-3 py-1 hover:scale-105">
          Cat 1
        </li>
        <li className="mb-5 bg-zinc-700 rounded-full px-3 py-1 hover:scale-105">
          Cat 2
        </li>
        <li className="mb-5 bg-zinc-700 rounded-full px-3 py-1 hover:scale-105">
          Cat 3
        </li>
        <li className="mb-5 bg-zinc-700 rounded-full px-3 py-1 hover:scale-105">
          Cat 4
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
