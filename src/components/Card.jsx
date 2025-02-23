import React, { Children, useContext } from "react";
import { VscFiles } from "react-icons/vsc";
import { motion } from "framer-motion";
import { AnimationContext } from "../context/AnimationContext";

const Card = ({ rank, rating, image, parts, title, time, readers }) => {
    const { containerVariants, childVariants, rightVariants, longRightVariants, leftVariants } = useContext(AnimationContext);

    return (
        <>
            <motion.div variants={childVariants} className="card">
                <div className="relative overflow-hidden bg-white rounded-lg shadow-md w-50 hover:scale-105 hover:cursor-pointer">
                    {/* Image Section */}
                    <img src={image} alt={title} className="object-cover overflow-hidden rounded-sm" />
                    {/* Badge - Rank */}
                    <div className="absolute px-2 py-1 text-sm font-bold text-white bg-red-500 rounded top-2 left-2">#{rank}</div>
                    {/* Badge - Rating */}
                    <div className="absolute px-2 py-1 text-sm font-bold text-white bg-teal-500 rounded top-2 right-2">⭐ {rating}</div>
                    {/* Badge - Rating */}
                    <div className="absolute flex items-center px-2 py-1 text-sm font-bold text-white bg-gray-400 rounded bottom-2 left-2">
                        <VscFiles /> {parts} parts
                    </div>
                </div>
                {/* Content Section */}
                <motion.div variants={childVariants} className="">
                    <h3 className="mt-2 text-lg font-bold truncate">{title}</h3>
                    <div className="mt-1 text-sm text-gray-500">
                        <p>{time} hours</p>
                        <p>{readers} Total Readers</p>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default Card;
