import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Card from "../components/Card";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AnimationContext } from "../context/AnimationContext";

const Section = ({ title, link, items }) => {
    const { containerVariants, childVariants, rightVariants, longRightVariants, leftVariants } = useContext(AnimationContext);

    return (
        <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="section">
            <Link to={link}>
                <motion.div variants={childVariants} className="flex justify-between my-4 categories">
                    <h1 className="my-4 mb-0 font-bold hover:cursor-pointer">{title}</h1>
                    <button>
                        <FaArrowRightLong />
                    </button>
                </motion.div>
            </Link>

            <div className="grid grid-cols-2 gap-4 cards md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
                {items.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>
        </motion.div>
    );
};

export default Section;
