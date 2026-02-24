import Link from "next/link";

import Navbar from "./components/Navbar";
import PageHeader from "./components/PageHeader";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Navbar />
        <PageHeader title="Home" />

        <div className="container w-fit ml-2 p-3 rounded bg-slate-600 flex flex-row mt-3">
          <div className="container w-50 flex flex-col rounded p-3 gap-2">
            <Link href="/join-room">
              <div className="container w-full p-3 bg-white text-black rounded">
                Join a room
              </div>
            </Link>
            <Link href="/create-room">
              <div className="container w-full p-3 bg-white text-black rounded">
                Create a room
              </div>
            </Link>
          </div>
          <div className="conatiner-fluid p-3">
            
          </div>
        </div>
      </div>
    </>
  );
}
