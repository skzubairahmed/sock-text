import Link from "next/link";
import Image from "next/image";

import Navbar from "./components/Navbar";
import PageHeader from "./components/PageHeader";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Navbar />
        <PageHeader title="Home" />
        <div className="container-fluid p-1 bg-slate-600 flex flex-row mt-3 flex-wrap">
          <div className="container w-50 flex flex-col rounded p-2 gap-2">
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
          
          <div className="container w-50 flex flex-col rounded p-2 gap-2">
            <Link href="/gallery">
              <div className="container w-full p-3 bg-white text-black rounded">
                Gallery
              </div>
            </Link>
            <Link href="/contact">
              <div className="container w-full p-3 bg-white text-black rounded">
                Contact Support
              </div>
            </Link>
          </div>
        </div>
        <div className="container-fluid flex flex-col items-center gap-3 p-3 bg-slate-600">
          <div className="container-fluid flex flex-row justify-center">
            <div className="container rounded text-center p-2 bg-white text-black w-fit">
              My thoughts
            </div>
          </div>
          <p className="text text-white">
            This is a real time texting app I tried building.
            I first thought of creating the backend using WebSockets but soon realised that it was a horrible
            idea because NextJS uses serverless APIs which can't run WebSockets properly. So, I'm currently looking for 
            some other idea. Will keep you guys posted :)
            
            If you have any ideas on how I could make real time messaging work using NextJS APIs then please contact me
            on slack - sheikhzubairahmed3949
          </p>
        </div>

        <div className="container-fluid flex flex-col items-center gap-3 p-3 bg-slate-600">
          <div className="container-fluid flex flex-row justify-center">
            <div className="container rounded text-center p-2 bg-white text-black w-fit">
              A glimpse of the past
            </div>
          </div>

          <div className="contianer-fluid p-1 flex flex-row gap-2 flex-wrap text-black justify-center">
            <div className="container w-fit flex flex-col gap-1">
              <div className="container w-50 bg-white rounded h-50 p-2">
              </div>
              <div className="container w-50 bg-white text-black p-2 rounded">
                The first version of this site !
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
