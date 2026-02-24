import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";

export default function PublicRooms(){
    return(
        <>
            <div className="flex flex-col gap-2">
                <Navbar />
                <PageHeader title="Public Rooms" />
            </div>
        </>
    )
}