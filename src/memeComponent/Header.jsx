import React from "react";
export default function Header() {
  return (
    <nav className="bg-purple-800 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-row">
          <img
            className="w-20"
            // src={process.env.PUBLIC_URL + "/images/meme1.png"}
            alt="meme"
          />
          <div className="text-white font-semibold text-lg">Meme Generator</div>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:underline">
              React Course-Project 2
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
