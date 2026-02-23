import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container-fluid p-2 bg-white flex flex-row gap-3 content-center">
        <h1 className="text text-black">SockText</h1>
        <div className="flex text-center flex-row gap-3">
          <Link href="/"><h1 className="text text-black">Home</h1></Link>
          <Link href="/public-rooms"><h1 className="text text-black">Rooms</h1></Link>
          <Link href="/about-me"><h1 className="text text-black">About</h1></Link>
        </div>
      </div>
    </>
  );
}
