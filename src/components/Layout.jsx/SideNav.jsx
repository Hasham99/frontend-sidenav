import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { SiAbstract } from "react-icons/si";

const SideNav = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const menus = [
    { title: "Home", src: "/" },
    { title: "About", src: "about" },
    { title: "Menu 03", gap: true, src: "" },
    { title: "Menu 04", src: "" },
    { title: "Menu 05", src: "" },
    { title: "Menu 06", gap: true, src: "" },
  ];

  return (
    <>
      <div
        className={` ${
          open ? "w-80" : "w-20 "
        } relative duration-300 border-r-2 border-orange-500 p-5 bg-slate-800`}
      >
        <span
          onClick={() => {
            setOpen(!open);
          }}
          className={`bg-orange-500  duration-700 text-white absolute top-10 -right-3 px-2 py-2 rounded-full cursor-pointer ${
            open ? "" : "rotate-180"
          }`}
        >
          <FaArrowLeft />
        </span>

        <div className="select-none flex items-center gap-x-2 text-2xl font-medium text-white">
          <span>
            <SiAbstract className="w-9 h-9" />
          </span>
          <span className={`${open ? "" : "scale-0 pl-2"}`}>Hello</span>
        </div>

        <ul className={`pt-5  duration-300`}>
          {menus.map((menu, index) => (
            <li
              key={index}
              onClick={() => navigate(menu.src)}
              className={`select-none p-2 flex text-gray-200 hover:bg-slate-600 cursor-pointer gap-x-3  text-sm items-center rounded-md ${
                menu.gap ? "mt-9" : ""
              }`}
            >
              <span>
                <SiAbstract className="w-6 h-6" />
              </span>
              <span className={`${open ? "" : "hidden"}`}>{menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideNav;
