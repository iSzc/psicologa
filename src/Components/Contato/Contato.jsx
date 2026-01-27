import Header from "../Header/Header";
import ContatoForm from "../Contato/ContatoForm/ContatoForm.jsx"
import drawPsi from "../../assets/drawPsi2.png"
import style from "../Contato/style.module.css"
import { useState } from "react";
import { motion } from "framer-motion"


function Contato() {
//     const [nameValue, setNameValue] = useState("");

//     const [formData, setFormData] = useState({
//     inputNameValue: "",
//     inputEmailValue: "",
//     inputSubjectValue: "",
//     inputMessageValue: "",
//   });


    return (
        <main 
        
        className="main bg-zinc-100">

            <Header/>
            
            <div
            className={`content flex`}>
                <div className={`left flex flex-col mr-5 ml-5`}>
                    <motion.div
                    initial={{ x: 20, opacity: 0}}
                    animate={{ x: 0, opacity: 1}}
                    transition={{ delay: 0.5, duration: 0.5}}
                    className=" mt-10 lg:ml-10 flex flex-col lg:gap-y-5">
                        <h1 className="font-Gulzar lg:text-5xl text-3xl lg:mt-10 font-bold">FALE COMIGO</h1>
                        <p className="lg:text-3xl text-xl mt-5 lg:mt-0 font-Gulzar lg:w-1/2 text-justify font-bold">
                            Se você deseja agendar uma sessão, tirar dúvidas ou saber mais sobre o nosso trabalho, será um prazer conversar com você.
                        </p>
                    </motion.div>
                    <div className="mr-5 ml-5">
                        <ContatoForm />
                    </div>
                </div>
                <motion.div 
                initial={{ x: -20, opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ delay: 0.5, duration: 0.5}}
                className={`right w-1/2 mt-5 flex flex-col items-center justify-center ${style.rightImg}`}>
                    <img src={drawPsi} alt="ImagemLateralDesenho" />
                    <p className="font-bold text-2xl">Atendimento Online e presencial</p>
                    <p className="font-bold text-2xl">Respostas em horário comercial</p>
                </motion.div>
            </div>
        </main>
    )
}

export default Contato;