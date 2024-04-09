import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import MidComponentItem from "./MidComponentItem";
import MidPhone1 from "../../assets/images/MidComponentPhone.png";
import MidPhone2 from "../../assets/images/midPhone2.png";

const MidComponentParent = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);

  const handleImage1Click = () => {
    setShowImage1(true);
  };

  const handleImage2Click = () => {
    setShowImage2(true);
  };

  return (
    <div>
      <div ref={ref1}>
        <MidComponentItem
          title="Dive into the Future"
          text="In a world where people constantly have phones in their hands, the need for online opportunities is growing. We have a solution - fully digital access to all information and services related to the interior and design itself. Everything for a carefree stay in the palm of a hand."
          img={MidPhone1}
          reverse
          animate={inView1 || showImage1}
          slowAnimation
          onClick={handleImage1Click}
        />
      </div>
      <div ref={ref2}>
      <motion.div
          className="sm:pt-10 sm:w-full sm:pl-4 w-5/5 mx-auto pl-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <MidComponentItem
            title="Search by room"
            img={MidPhone2}
            animate={inView2 || showImage2}
            slowAnimation
            onClick={handleImage2Click}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MidComponentParent;
