import Image from "next/image"
import logo from '../../public/images/logo.png'
import Link from "next/link"

export const Header = () => {
    return (
        <header className="w-full rounded-b-3xl  bg-black/15 h-32 mb-4 ">
            <Link href={'/'}>
            <img src={logo.src} alt='logo da Empressa' className="  size-40 h-auto mb-3 mx-auto item-center " />
            </Link>
            
        </header>


    )
}