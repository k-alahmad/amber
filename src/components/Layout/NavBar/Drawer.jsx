import React from "react";
import { MdClose } from "react-icons/md";
import Logo from "../../../assets/logo/AVA-Logo.svg";
export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-50  bg-gray-900 bg-opacity-0 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0"
          : " transition-all delay-500 opacity-0 translate-x-full")
      }
    >
      <section
        className={
          " w-screen max-w-[200px] md:max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-full pb-10 flex flex-col justify-start items-center space-y-6 overflow-y-scroll h-full">
          <header className="p-4 font-bold w-full flex justify-between items-start ">
            <MdClose
              size={30}
              onClick={() => {
                setIsOpen(false);
              }}
              className="cursor-pointer text-[#B28A5D]"
            />
            <img
              className="h-[100px] sm:h-[100px]  cursor-pointer"
              src={Logo}
              alt="LOGO"
            />
          </header>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
