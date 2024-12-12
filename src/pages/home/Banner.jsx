import { easeOut } from "motion";
import { motion } from "motion/react";
import React from "react";
import bannerImg1 from "../../assets/image/officeTeam-1.jpg";
import bannerImg2 from "../../assets/image/offcieTeam-2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={bannerImg1}
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-[36px] border-l-[6px] border-b-[6px] border-blue-600 rounded-br-[36px] shadow-2xl"
          />
          <motion.img
            src={bannerImg2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 8, delay: 4, repeat: Infinity }}
            className="max-w-sm w-64 rounded-t-[36px] border-l-[6px] border-b-[6px] border-blue-600 rounded-br-[36px] shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Latest Jobs For You!</h1>
          <motion.h1
            animate={{ x: 70, color: ["orange"] }}
            transition={{
              duration: 3,
              delay: 1,
              ease: easeOut,
              repeat: Infinity,
            }}
            className="text-5xl font-bold mt-6">
            You Must Be{" "}
            <motion.span
              animate={{ color: ["#10f27a", "#f22c32", "#7515f2"] }}
              transition={{ duration: 2, repeat: Infinity }}>
              Hired
            </motion.span>{" "}
            Now
          </motion.h1>
          <p className="py-6">
            Choose Your Career Path With Us. We are always here for help you to
            find a job. It jobs or any type of government jobs or Corporate
            Jobs. We are always on your favor.{" "}
          </p>
          <button className="btn btn-accent text-white font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
