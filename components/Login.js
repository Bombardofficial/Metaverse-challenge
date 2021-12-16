import React from "react";
import Image from "next/image";

import { useMoralis } from "react-moralis";
function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <h1>I am the login screen</h1>
      <div
        className="flex flex-col absolute z-50 h-4/6 w-full 
      items-center justify-center"
      >
        <Image
          className="object-cover rounded-full"
          src="/../public/logo-home.png"
          height={400}
          width={400}
        />
        <button
          onClick={authenticate}
          className="bg-red-700 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="/../public/background.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
