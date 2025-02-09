import React, { useContext } from "react";
import bgImage from "../assets/bg.webp";
import { motion } from "framer-motion";
import { AnimationContext } from "../context/AnimationContext";

const Write = () => {
    const { containerVariants, childVariants, rightVariants, longRightVariants, leftVariants } = useContext(AnimationContext);

    return (
        <div className="write bg-[#F8F8F8] flex justify-center">
            <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="box flex flex-col gap-4 ml-10 mt-10 p-10 w-full md:w-[80%]">
                <motion.div variants={childVariants} className="p-2 bg-white border writebox">
                    <div className="flex flex-col items-center gap-4 p-8 text-white bg-gray-400 graybox">
                        <motion.h2 variants={childVariants} className="text-xl text-nowrap">
                            You can write on Pratilipi!
                        </motion.h2>
                        <motion.button variants={childVariants} className="w-40 p-4 bg-red-600 rounded-md">
                            Add New Content
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div variants={childVariants} className="overflow-hidden bg-white border eventbox">
                    <h2 className="text-xl ml-3 border-l-[3px] border-red-600 pl-2">Events</h2>
                    <img src={bgImage} alt="" className="w-full p-3" />
                </motion.div>
                <motion.div variants={childVariants} className="overflow-hidden bg-white border blogbox">
                    <h2 className="text-xl ml-3 border-l-[3px] border-red-600 pl-2">Blog and Editorial</h2>
                    <img src={bgImage} alt="" className="w-full p-3" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Write;
