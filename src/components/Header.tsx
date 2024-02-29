import Image from "next/image"
import logo from '../../public/images/logo.png'

export const Header = () => {
    return(
        <div className="w-full bg-sky-300 bg-opacity-45 rounded-b-full top-0 absolute">
            <img src={logo.src} alt='logo da Empressa' className="  h-48 w-72 mb-3 mx-auto item-center relative"/>
        </div>
            
  
    )
}