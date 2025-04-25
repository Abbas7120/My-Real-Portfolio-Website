import { HERO_CONTENT } from "../constants";
import profilePic from "../pics/LinkedInImage.jpg";
import { motion } from "framer-motion";
import Mid from "./Mid";
import CustomButton from "./Button";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Hero = () => {
  return (
    <div className="border-b border-orange-400 pb-4 lg:mb-35  m-3">
      <div className="flex flex-col items-center text-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center ">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-3xl tracking-tight lg:mt-16 lg:text-5xl"
            >
              👋 Syed Mohammad Abbas Rizvi
            </motion.h1>
            <motion.img
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              src={profilePic}
              alt="Abbas Pic"
              className="rounded-full border-2 border-orange-400  shadow-lg w-60 h- mb-8" // Adjust size as needed
            />
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className=" bg-gradient-to-r from-orange-600 via-yellow-500
to-red-600 bg-clip-text text-2xl tracking-tight text-transparent  lg:text-4xl"
            >
              {" "}
              <Mid />
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-dark tracking-tighter  "
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-dark tracking-tighter  "
            >
              <CustomButton />{" "}
            </motion.p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Hero;
