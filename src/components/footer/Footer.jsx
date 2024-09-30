import { CiMail } from "react-icons/ci"


const Footer = () => {
  return (
    <div className="md:text-lg sm:text-base text-sm">
        <div className="flex items-center gap-5 w-full">
        <hr className="w-full border-b-green-700 border-[2px]"/>
        <ul className="flex gap-5 text-green-700">
            <li><a className="whitespace-nowrap hover:text-gray-500" href="#">Sustainable Websites</a></li>
            <li><a className="whitespace-nowrap hover:text-gray-500" href="#">Blog</a></li>
            <li><a className="whitespace-nowrap hover:text-gray-500" href="#">Contact Us</a></li>
        </ul>
        <hr className="w-full border-b-green-700 border-[2px]" />
        </div>


        <div className="px-20 py-16 flex justify-between lg:flex-row flex-col items-center gap-5 text-center">
            <div>
                <h1 className="text-green-700">Contact:</h1>
                <a className="flex gap-2 items-center hover:underline" href="mailto"><CiMail /> info@everythinggreen.org</a>
            </div>
            <a href="#" className="hover:underline">Privacy policy</a>
            <div>
                <h1 className="text-green-700">Address:</h1>
                <p>China Hong Kong City Block 3, Room 1203,</p>
                <p>12th Floor, 33 Canton Rd, Tsim Sha Tsui, Hong Kong</p>
            </div>
        </div>
        <p className="text-gray-500 text-sm text-center">�� 2024 EverythingGreen. All rights reserved.</p>
    </div>
  )
}

export default Footer