import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Title from "./Title";
import TypingText from "./TypingText";
import Buttons from "./Buttons";

function Header() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      id="header"
      className="bg-yellow min-h-screen flex items-center justify-center"
    >
      <motion.div
        ref={ref}
        className="flex flex-col items-center justify-center max-w-7xl w-full text-center mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Title />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <TypingText />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Buttons />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Header;
