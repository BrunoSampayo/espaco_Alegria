import Image from "next/image"
import logo from '../../public/images/logo.png'

export const Header = () => {
    return(
        <div className="w-full bg-sky-300 bg-opacity-45 rounded-b-full">
            <img src={logo.src} alt='logo da Empressa' className="  h-48 w-72 mb-5 mx-auto item-center relative"/>
        </div>
            
  
    )
}