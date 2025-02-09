import React, { useContext } from "react";
import { cats } from "../assets/assets.js";
import { AnimationContext } from "../context/AnimationContext.jsx";
import { motion } from "framer-motion";

const Category = () => {
    const { containerVariants, childVariants, rightVariants, longRightVariants, leftVariants } = useContext(AnimationContext);

    return (
        <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="flex justify-center p-20 bg-gray-100 categories">
            <div className="box w-full md:w-[80%]">
                {/* ---------------------Heading---------------------------------- */}
                <motion.div variants={childVariants} className="font-bold align-middle heading">
                    <h1 className="text-2xl md:text-4xl">Explore Categories</h1>
                </motion.div>

                {/* ------------------Categories Grid------------------ */}
                <div className="grid grid-cols-1 gap-4 mt-6 cards md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {cats.map((kat) => (
                        <motion.div variants={childVariants} className="relative h-40 mt-5 singleCard hover:cursor-pointer hover:scale-105" key={kat.id}>
                            <img className="object-cover w-full h-full rounded-md" src="https://images.unsplash.com/photo-1680725779155-456faadefa26" alt={`${kat.title} category`} />
                            <div className="absolute inset-0 bg-gray-700 rounded-md opacity-60"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h2 className="text-3xl font-bold text-white">{kat.title}</h2>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Category;
