import { useState } from "react"
import { IoEarthSharp, IoMenu } from "react-icons/io5"


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="md:flex items-center md:justify-between gap-5 w-full">
        <div className="flex justify-between items-center">
            <div className="font-rumraisin flex flex-col items-center tracking-wide">
                <h1 className="flex items-center text-2xl">Everything <IoEarthSharp /> Green</h1>
                <p className="text-[10px] font-thin mt-2">MEASURING IMPACT, DRIVING CHANGE</p>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden"><IoMenu className="text-4xl" /></button>
        </div>

        <hr className="w-full hidden lg:block" />
        <div className={`w-max flex  gap-5 items-center m-auto mt-5 md:m-0 ${isOpen ? 'block' : 'hidden'} md:block`}>
            <nav className="flex md:flex-row flex-col text-center gap-5 font-literata">
                <a href="#" className="whitespace-nowrap hover:text-gray-500" >Sustainable websites</a>
                <a href="#" className="whitespace-nowrap hover:text-gray-500" >Blog</a>
                <a href="#" className="whitespace-nowrap hover:text-gray-500" >Contact</a>
                <a href="#" className="whitespace-nowrap hover:text-gray-500" >Login</a>
            </nav>
            
        </div>
        <hr className="w-28 hidden lg:block" />
    </header>
  )
}

export default Navbar