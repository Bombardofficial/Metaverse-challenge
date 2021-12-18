import Head from "next/head";
import Login from "../components/Login";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";
export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-sky-900 overflow-hidden">
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute z-50">
        <div id="stars"></div>
      </div>
      {/*<h1 className="font-mono text-2xl text-white  font-bold uppercase bg-red-700 shadow-lg shadow-red-500/50 object-cover p-2">
          Welcome to the METAVERSE chat!
  </h1>*/}

      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </div>

      {/*<button
        onClick={logout}
        className="bg-red-700 rounded-lg p-3 font-bold shadow-lg  shadow-slate-900"
      >
        Logout
      </button>*/}
    </div>
  );
}
