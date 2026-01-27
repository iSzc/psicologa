import logoHouse from "../../assets/logoHouse.png"
import close from "../../assets/icon-close.svg"
import hamburger from "/src/assets/icon-hamburger.svg"
import Button from "./Button/Button";
import style from "../Header/style.module.css"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = (props) => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [isOpen])

    return (
        <main className="mainContainer shadow-xl w-full relative z-50">
            <div className={`flex justify-between ml-5 md:ml-0`}>
                <div className="flex items-center w-1/2 md:w-1/3 h-15 justify-center">
                    <div className="boxLogo flex items-center md:px-8 gap-x-5 md:w-full md:h-20">
                        <img src={`${logoHouse}`} alt="Logo CentroSer" className="w-[30px]" />
                        <span className="psi md:text-2xl text-md font-LeagueScript font-extrabold">Silvia Helena</span>
                    </div>
                </div>
                <div className={`AllButons md:text-2xl justify-around text-md w-2/3 flex ${style.allContent} sm:gap-x-6`}>
                    <Link to="/" className="flex items-center">
                        <Button name="Inicio" />
                    </Link>
                    <Link to="/centroser" className="flex items-center">
                        <Button name="CentroSer" />
                    </Link>
                    <Link to="/servicos" className="flex items-center">
                        <Button name="Serviços" />
                    </Link>
                    <Link to="/contato" className="flex items-center">
                        <Button name="Contato" />
                    </Link>
                </div>
                <button className={`flex justify-center items-center w-1/3 mr-5 md:mr-0`}
                
                >
                    <img src={`${isOpen? close : hamburger}`} alt="iconMenu" className={`${style.hiddenMenu}`} onClick={toggleMenu}/>
                </button>
                
                
            </div>
            {isOpen && ( 
                <div className={`fixed min-h-screen w-[200px] flex flex-col right-0 bg-[#f0c8b8] opacity-[.95] rounded-xl text-2xl font-CreteRound ${style.animation} ${style.menuIcon} items-center gap-y-8 pt-10`}>
                    <Link to="/">
                        <button className="">Inicio</button>
                    </Link>

                    <Link to="/centroser">
                        <button>CentroSer</button>
                    </Link>

                    <Link to="/servicos">
                        <button>Serviços</button>
                    </Link>

                    <Link to="/contato">
                        <button>Contato</button>
                    </Link>
                </div>
             )}
        </main>
    )
}

export default Header;