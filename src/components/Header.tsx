import Image from "next/image"
import logo from '../../public/images/logo.png'

export const Header = () => {
    return(
        <div className=" mb-14 mt-10 flex items-center  h-28 w-full    rounded-b-3xl z-10 ">
            <img src={logo.src} alt='logo da Empressa' className="  h-96 w-72 top-5 mx-auto item-center relative"/>
        </div>
    )
}