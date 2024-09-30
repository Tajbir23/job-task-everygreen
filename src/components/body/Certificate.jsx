import { IoEarthSharp } from "react-icons/io5"


const Certificate = () => {
  return (
    <div className="max-w-4xl m-auto my-24 border rounded-t-2xl">
        <div className="bg-emerald-600 text-white text-center font-bold text-xl md:text-2xl rounded-t-2xl">
            <h1 className="p-5">claim and download your greenWeb certificate</h1>
        </div>

        <div className=" flex items-center justify-center">
        <div className="flex justify-between items-center p-10">
            <div className="font-rumraisin flex flex-col items-center tracking-wide">
                <h1 className="flex items-center text-2xl"><span className="text-green-600">Everything</span> <IoEarthSharp /> Green</h1>
                <p className="text-[10px] font-thin mt-2">MEASURING IMPACT, DRIVING CHANGE</p>
            </div>
        </div>
        </div>

        <p className="p-10 text-center pt-0 text-xl">The green<span className="text-green-600">Web</span> team designed this website&apos;s carbon calculator to inspire and enlighten people about the importance of creating websites with low carbon emissions.</p>
    </div>
  )
}

export default Certificate