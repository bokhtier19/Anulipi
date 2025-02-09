import React, { useContext } from "react";
import logo from "../assets/logo.svg";
import { motion } from "framer-motion";
import { AnimationContext } from "../context/AnimationContext";

const Login = () => {
    const { containerVariants, childVariants, rightVariants, longRightVariants, leftVariants } = useContext(AnimationContext);

    return (
        <motion.div initial="hidden" whileInView="show" variants={containerVariants} viewport={{ once: true }} className="bg-[#F8F8F8]">
            <motion.div variants={childVariants} className="p-2 ml-20 join-pratilipi">
                <h1 className="text-xl font-bold border-l-[3px] border-red-600 ml-2 pl-2 ">Join Pratilipi</h1>
            </motion.div>
            <div className="flex flex-col justify-center gap-5 p-2 m-4 login md:flex-row md:w-full md:justify-centre">
                <motion.div variants={childVariants} className="box flex flex-col items-center gap-8 lg:w-[45%] w-full h-[40%] bg-white p-6 border">
                    <div className="w-32 h-16 logo">
                        <img src={logo} alt="" className="w-full h-full" />
                    </div>
                    <h1 className="text-lg text-center">Sign in to follow your favourite authors,review contents and create your own library.</h1>
                    <div className="flex flex-col w-64 gap-1 buttons"></div>

                    <div className="relative flex items-center justify-center">
                        <hr className="flex-grow" />
                        <span className="absolute px-2 bg-white">OR</span>
                    </div>

                    <input type="text" placeholder="  Email" className="w-full p-2 border border-gray-300 rounded-lg " />
                </motion.div>
                <motion.div variants={childVariants} className="benefit flex flex-col gap-2 items-start p-6 lg:w-[40%] w-full h-[40%] bg-white border ">
                    <h1 className="font-bold text-base border-l-[3px] border-red-600 pl-2">Benefits of Login</h1>
                    <ul className="text-sm line-clamp-6">
                        <li></li>
                        <li>Write and win prizes</li>
                        <li>Connect with friends and read stories together</li>
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Login;
