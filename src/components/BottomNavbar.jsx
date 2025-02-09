import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimationContext } from "../context/AnimationContext";

const BottomNavbar = () => {
    const { containerVariants, childVariants, rightVariants, longRightVariants, leftVariants } = useContext(AnimationContext);
    return (
        <>
            <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="flex flex-col items-start mx-auto my-8 md:justify-around md:flex-row">
                <motion.div variants={leftVariants}>
                    <h2 className="my-4 font-semibold">Popular Languages</h2>
                    <ul className="flex flex-col gap-2 ml-4">
                        <Link>Hindi</Link>
                        <Link>English</Link>
                        <Link>Tamil</Link>
                        <Link>Bengali</Link>
                        <Link>Telugu</Link>
                    </ul>
                </motion.div>
                <motion.div variants={childVariants}>
                    <h2 className="my-4 font-semibold">Top Genre</h2>
                    <ul className="flex flex-col gap-2 ml-4">
                        <Link>Rommance</Link>
                        <Link>Drama</Link>
                        <Link>Yound Adult</Link>
                        <Link>Suspence</Link>
                        <Link>Top Content</Link>
                    </ul>
                </motion.div>
                <motion.div variants={rightVariants}>
                    <h2 className="my-4 font-semibold">Also Read</h2>
                    <ul className="flex flex-col gap-2 ml-4">
                        <Link>Most Read</Link>
                        <Link>William Shakespeare</Link>
                        <Link>Arthur Canon Doyle</Link>
                    </ul>
                </motion.div>
            </motion.div>
        </>
    );
};

export default BottomNavbar;
