"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SvgLogo from "@/public/images/Vectors/logo.svg"; // Ensure the path is correct

const Preloader = ({ onFinish }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      if (onFinish) {
        onFinish();
      }
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [onFinish]);

  return isAnimating ? (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black text-cyan-400"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 3.5 }}
    >
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 3.5, ease: "easeInOut" }}
        className="relative w-64 h-64 flex items-center justify-center"
      >
        {/* SVG Logo */}
        <motion.div
          className="w-32 h-32 drop-shadow-[0_0_20px_#00f2ff]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image src={SvgLogo} alt="TechFest Logo" width={128} height={128} />
        </motion.div>

        {/* Futuristic Circular Spin */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute w-72 h-72 border-[4px] border-cyan-400 rounded-full opacity-80 shadow-[0_0_25px_#00f2ff]"
        ></motion.div>

        {/* Additional High-Tech Glowing Effect */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute w-60 h-60 border-[3px] border-cyan-300 rounded-full opacity-50 shadow-[0_0_15px_#00f2ff]"
        ></motion.div>
      </motion.div>
    </motion.div>
  ) : null;
};

export default Preloader;
