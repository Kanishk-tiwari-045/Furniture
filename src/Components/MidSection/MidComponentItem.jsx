import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
import { room } from "../../DataForPage/dummyData";

const MidComponentItem = ({ title, img, text, reverse }) => {
  const { theme } = useContext(ThemeBgContext);
  const [showImage, setShowImage] = useState(false);

  const handleStartNow = () => {
    setShowImage((prevShowImage) => !prevShowImage); // Toggle showImage state
  };

  return (
    <div id="company">
      {reverse ? (
        <div className="sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center">
          <motion.div
            className="sm:w-full sm:pl-4 w-4/5 pl-24"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className={
                theme === "light"
                  ? "sm:text-4xl text-5xl pt-10 pb-4 font-bold font-cave no-underline align-middle tracking-wide normal-case leading-none text-dark"
                  : "sm:text-4xl text-5xl pt-10 pb-4 font-bold font-cave no-underline align-middle tracking-wide normal-case leading-none text-white"
              }
            >
              {title}
            </h2>
            <p
              className={
                theme === "light"
                  ? "sm:text-xl text-xl w-full pb-4 font-normal font-cave no-underline align-middle tracking-wide normal-case leading-none text-dark"
                  : "sm:text-xl text-xl w-full pb-4 font-normal font-cave no-underline align-middle tracking-wide normal-case leading-none text-white"
              }
            >
              {text}
            </p>
            <button className="pushable mt-4" onClick={handleStartNow}>
              <span className="front">Start now</span>
            </button>
          </motion.div>
          <motion.div
            className=""
            initial="hidden"
            animate={showImage ? "visible" : "hidden"}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              className="sm:h-[475px] h-[775px] pt-10 hover:rotate-6 duration-1000 cursor-pointer"
              src={img}
              alt="phone1"
            />
          </motion.div>
        </div>
      ) : (
        <div id="room" className="sm:flex-col flex flex-row-reverse justify-around items-center w-full">
          <div className="sm:w-full sm:pl-4 pb-4">
            <h2
              className={
                theme === "light"
                  ? "sm:text-4xl text-5xl pt-10 pb-2 font-bold font-cave no-underline align-middle tracking-wide normal-case leading-none text-dark"
                  : "sm:text-4xl text-5xl pt-10 pb-2 font-bold font-cave no-underline align-middle tracking-wide normal-case leading-none text-white"
              }
            >
              {title}
            </h2>
            <div className="flex flex-col">
              {room.map((item) => (
                <div className="flex items-center py-2" key={item.id}>
                  <div className="mr-4">
                    <img className="w-16 h-16" src={item.img} alt="blueSofa" />
                  </div>
                  <p
                    className={
                      theme === "light"
                        ? "sm:text-xl text-xl font-normal font-cave no-underline align-middle tracking-wide normal-case leading-none text-dark w-full"
                        : "sm:text-xl text-xl font-normal font-cave no-underline align-middle tracking-wide normal-case leading-none text-white w-full"
                    }
                  >
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              className="sm:h-[475px] h-[775px] pt-1 hover:rotate-[-6deg] duration-1000 cursor-pointer"
              src={img}
              alt="phone"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MidComponentItem;

