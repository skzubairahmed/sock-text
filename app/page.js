import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <Navbar />
        
        <div className="text-center bg-white p-2">
          <text className="text-lg text-black">Home</text>
        </div>
      </div>
    </>
  );
}
