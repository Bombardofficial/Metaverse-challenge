import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useMoralis } from "react-moralis";
import Rocket from "../public/images/rocket1.svg";
import PlanetTwo from "../public/images/planet-2.svg";
import PlanetThree from "../public/images/planet-3.svg";
import PlanetFour from "../public/images/planet-4.svg";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <div className="absolute z-50">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div className="flex flex-col justify-center items-start p-10 font-bold text-white absolute z-50 pb-5 text-5xl">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="hidden lg:inline-grid">
            <h1>
              Welcome to <br />
              <br />
            </h1>
            <div className="welcome">
              <h1>Metaverse</h1>
            </div>
          </div>
        </motion.div>
      </div>
      <div
        className="flex flex-col absolute z-50 h-4/6 w-full 
      items-center justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{
            scale: 0.95,

            border: "none",
            color: "#000",
          }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <Image
            className="object-cover rounded-full"
            src="https://i.postimg.cc/VLq1RDSJ/logo-home.png"
            height={400}
            width={400}
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{
            scale: 0.95,
            backgroundColor: "#950101",
            border: "none",
            color: "#000",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
        >
          <button
            onClick={authenticate}
            className="bg-black text-white shadow-md border-2 border-white shadow-white rounded-md outline-none p-5 font-bold animate-pulse"
          >
            Login with MetaMask 🦊
          </button>
        </motion.div>
      </div>

      <div className="w-full h-screen overflow-hidden">
        <Image
          src="https://live.staticflickr.com/4237/35275795092_ecb2a7c887_k.jpg"
          layout="fill"
          objectFit="cover"
        />
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{
            repeat: Infinity,
            duration: 25,
            delay: 2,
            ease: "backInOut",
            bounce: 0.25,
          }}
          variants={{
            hidden: { opacity: 1, x: -400, y: 300 },
            visible: { opacity: 1, x: -400, rotate: -360 },
          }}
        >
          <div className="relative float-right p-5 grid grid-flow-col gap-y-0 h-36 w-36  ">
            <Image src={Rocket} alt="planet" />
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, x: -800 },
          }}
        >
          <div className="relative object-bottom float-right pr-20 pt-10 h-48 w-48 overflow-hidden">
            <Image src={PlanetTwo} alt="planet" />
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 300 },
          }}
        >
          <div className="relative object-bottom float-bottom pl-20 pt-10 h-48 w-48 overflow-hidden">
            <Image src={PlanetThree} alt="planet" />
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 300, x: -100 },
          }}
        >
          <div className="relative object-bottom float-right pr-10 pt-10 h-48 w-48 overflow-hidden">
            <Image src={PlanetFour} alt="planet" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
