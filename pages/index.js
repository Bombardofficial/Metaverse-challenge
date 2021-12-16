import Head from "next/head";
import Login from "../components/Login";
import Image from "next/image";
import { useMoralis } from "react-moralis";
export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex flex-col absolute z-50 h-4/6 w-full 
      items-center justify-center space-y-10"
      >
        <h1 className="font-mono text-2xl text-white  font-bold uppercase bg-red-700 shadow-lg shadow-red-500/50 object-cover p-2">
          Welcome to the METAVERSE chat!
        </h1>
        <button
          onClick={logout}
          className="bg-red-700 rounded-lg p-3 font-bold animate-bounce shadow-lg  shadow-slate-900"
        >
          Logout
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src="/../public/homepage.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
