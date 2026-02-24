import Link from "next/link"

export default function NotFound(){
    return(
        <div className="container-fluid h-screen g-3 text-black p-3 m-0 flex flex-col justify-center items-center">
            <h1 class="text-6xl font-bold md:text-8xl lg:text-9xl">
                404 Not Found
            </h1>
            <p>
                The page you were looking for does not exist :(
            </p>
            <p>Click here 👇 to return to home</p>
            <Link href="/">
                <button class="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-200">
                    Return to Home
                </button>
            </Link>
        </div>
    )
}