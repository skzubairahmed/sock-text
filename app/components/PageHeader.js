export default function PageHeader({title}){
    return(
        <div className=" container m-auto w-fit rounded p-1 text-center bg-slate-600">
            <text className="text-lg p-5 text-white">{title}</text>
        </div>
    )
}