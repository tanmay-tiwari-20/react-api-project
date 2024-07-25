import React from "react";
import { Link } from "react-router-dom";

const Details = () => {
  return <div className="w-[70%] flex items-center h-full m-auto p-[10%]">
    <img className="h-[80%] w-[90%] object-contain mr-5" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
    <div className="content ">
        <h1 className="text-4xl font-semibold ">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
        <h3 className="text-zinc-400 my-5">men's clothing</h3>
        <h2 className="font-semibold my-3">$109.95</h2>
        <p className="text-sm font-semibold mb-[8%]">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
        <Link className="py-1 px-3 rounded-full bg-blue-600 text-white font-semibold hover:scale-105 m-5">Edit</Link>
        <Link className="py-1 px-5 rounded-full bg-red-600 text-white font-semibold hover:scale-105 m-5">Delete</Link>
    </div>
  </div>;
};

export default Details;
