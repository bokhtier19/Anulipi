import { useRouteError } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimationContext } from "../context/AnimationContext";

export default function ErrorPage() {
    const { containerVariants, childVariants, rightVariants, longRightVariants, leftVariants } = useContext(AnimationContext);

    const error = useRouteError();
    console.error(error);

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            variants={containerVariants}
            viewport={{ once: true }}
            id="error-page"
            className="flex flex-col items-center justify-center h-screen text-center"
        >
            <motion.h1 variants={childVariants} className="mb-4 text-4xl font-bold">
                Oops!
            </motion.h1>
            <motion.p variants={childVariants} className="mb-2 text-lg">
                Sorry, an unexpected error has occurred.
            </motion.p>
            <motion.p variants={childVariants} className="text-gray-500">
                <i>{error.statusText || error.message}</i>
            </motion.p>
        </motion.div>
    );
}
