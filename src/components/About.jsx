import { ABOUT_TEXT } from "../constants";
import aboutImg from "../pics/about.png";
import { motion } from "framer-motion";
import { MyEducation } from "./Education";
const About = () => {
  return (
    <div className="border-b border-orange-600 pb-9   m-3">
      <h2 className="my-20 text-center  text-4xl">
        About
        <span className="text-orange-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl " src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 py-6 max-w-xl ">{ABOUT_TEXT}</p>
          </div>
          <div className="flex lg:flex-row justify-center lg:justify-start">
            <MyEducation />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
