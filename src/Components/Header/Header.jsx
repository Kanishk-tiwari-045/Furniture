import React, { useContext } from "react";
import header1 from "../../assets/images/headerImage.png";
import { Switch } from "@material-tailwind/react";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const Header = ({ topRef }) => {
  const { theme, handleTheme } = useContext(ThemeBgContext);

  return (
    <div ref={topRef} className="mx-auto pt-16">
      <div className="sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center">
        <div className="sm:w-full sm:pl-4 w-4/5 pl-24">
          <Switch
            label={theme === "light" ? "Switch to Dark" : "Switch to Light"}
            defaultChecked={theme === "dark" ? true : false}
            onClick={handleTheme}
          />
          <h1
            className={
              theme === "light"
                ? "sm:text-3xl text-5xl font-cave font-bold no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                : "sm:text-3xl text-5xl font-cave font-bold no-underline align-middle tracking-wide normal-case leading-normal text-white"
            }
          >
            AxeL{" "}
            <span
              className={
                theme === "light"
                  ? "sm:text-4xl text-dark text-5xl font-cave font-bold"
                  : "sm:text-4xl text-white text-5xl font-cave font-bold"
              }
            >
            Furnitures
            </span>{" "}
            Mobile App
          </h1>
          <div className="mt-4">
            <p
              className={
                theme === "light"
                  ? "sm:text-lg w-4/5 font-cave font-normal no-underline align-middle tracking-wide normal-case text-dark text-xl"
                  : "sm:text-lg w-4/5 font-cave font-normal no-underline align-middle tracking-wide normal-case text-white text-xl"
              }
            >
              Welcome to the future of interior design at your fingertips! Imagine a world where your dream home is just a tap away. Introducing the Furniture Mobile App, your ultimate companion in crafting spaces that reflect your unique style and personality.
            </p>
          </div>
          <div className="pb-20">
            <button className="pushable mt-4">
              <span className="front">Start now</span>
            </button>
          </div>
        </div>
        <div className="sm:pl-4 mt-4">
          <div>
            <h2
              className={
                theme === "light"
                  ? "sm:text-3xl text-4xl pb-4 font-cave font-bold no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                  : "sm:text-3xl text-4xl pb-4 font-cave font-bold no-underline align-middle tracking-wide normal-case leading-normal text-white"
              }
            >
            Design Display
            </h2>
          </div>
          <img
            className="sm:h-[475px] h-[765px] w-full bg-no-repeat bg-center relative z-10 header rounded-xl"
            src={header1}
            alt="header-phone"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
