
import React from "react";
import { motion } from "framer-motion";

const BottomBanner = () => {
  return (
    <motion.div 
      className="bg-background py-12 px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.h2 
        className="text-2xl md:text-3xl font-bold text-white mb-2 font-montserrat"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        HowTo.School — 
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {" "}индивидуальный подход к изучению English.
        </span>
      </motion.h2>
    </motion.div>
  );
};

export default BottomBanner;
