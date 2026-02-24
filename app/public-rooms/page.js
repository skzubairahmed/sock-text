import Navbar from "../components/Navbar"

export default function PublicRooms(){
    return(
        <>
            <div className="flex flex-col gap-3">
                <Navbar />

                <div className="container-fluid bg-white p-2 text-center">
                    <text className="text-lg text-black">Public Rooms</text>
                </div>
            </div>
        </>
    )
}