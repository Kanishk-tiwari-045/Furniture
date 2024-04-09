import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const MobileNavContainer = ({ name, link, setOpen }) => {
  return (
    <div className="py-2">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scaleY: 0 }} // initial position and opacity
        animate={{ opacity: 1, scaleY: 1 }} // final position and opacity
        transition={{ type: "tween", duration: 1}} // Adjust duration and delay here
      >
        <Link
          to={link}
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
          onClick={() => setOpen(false)}
        >
          <div className="flex flex-col items-center justify-center bg-white rounded-lg p-4">
            <h3 className="text-sm font-medium font-cave no-underline align-middle tracking-wide normal-case leading-none text-dark">
              {name}
            </h3>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default MobileNavContainer;

