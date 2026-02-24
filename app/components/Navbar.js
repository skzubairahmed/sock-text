import Link from "next/link"

export default function Navbar(){
    return(
        <>
            <div className="container-fluid justify-between p-2 bg-stone-800 text-white flex flex-row gap-3 content-center">
                <div className="flex text-center flex-row gap-3">
                    <Link href="/">
                        <h1 className="relative group text text-white">
                            SockText
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-900 transition-all duration-300 group-hover:w-full" />
                    </h1>
                    </Link>
                    <Link href="/">
                        <h1 className="relative group text text-white">
                        Home
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </h1>
                    </Link>
                    <Link href="/public-rooms">
                        <h1 className="relative group text text-white">
                        Rooms
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </h1>
                    </Link>
                    <Link href="/about-me">
                        <h1 className="relative group text text-white">
                        About
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </h1>
                    </Link>
                </div>

                <div className="flex flex-row gap-3">
                    <Link href="https://buymeacoffee.com/skzubairahmed" target="_blank">
                        <h1 className="relative group text text-white">
                        Buy me a coffee!
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </h1>
                    </Link>
                </div>
            </div>
        </>
    )
}