import { useMoralis } from "react-moralis";
import Image from "next/image";
import Avatar from "../components/Avatar";
import ChangeUsername from "../components/ChangeUsername";
function Header() {
  const { user } = useMoralis();
  return (
    <div className="sticky top-0 p-5 z-50 bg-black shadow-sm text-red-700 border-b-2 border-red-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-48 w-48 mx-auto hidden lg:inline-grid">
          <Image
            layout="fill"
            objectFit="cover"
            className="rounded-full object-cover"
            src="https://i.postimg.cc/VLq1RDSJ/logo-home.png"
          />
        </div>

        <div className=" col-span-4 text-left lg:text-center">
          <div className="relative h-36 w-36 lg:mx-auto border-red-700 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl">Welcome to the METAVERSE</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  );
}

export default Header;
