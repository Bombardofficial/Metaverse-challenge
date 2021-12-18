import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "../components/Avatar";
import ChangeUsername from "../components/ChangeUsername";
import { motion } from "framer-motion";
function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-[#000000]/20 backdrop-blur-md  shadow-sm shadow-sky-900 text-sky-400 border-b-2 border-sky-400 rounded-lg">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-48 w-48 mx-auto hidden lg:inline-grid">
          <motion.div
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
                  delay: 1,
                },
              },
            }}
          >
            <Image
              layout="fill"
              objectFit="cover"
              className="rounded-full object-cover "
              src="https://i.postimg.cc/VLq1RDSJ/logo-home.png"
            />
          </motion.div>
        </div>

        <div className="col-span-4 text-left lg:text-center ">
          <div className="relative h-36 w-36 lg:mx-auto border-sky-600 shadow-inner   border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>

          <h2 className="text-5xl font-bold truncate p-2 font-mono">
            {user.getUsername()}
          </h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
