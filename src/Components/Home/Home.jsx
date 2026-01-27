import Header from "../Header/Header";
import psicoImg from "../../assets/psicologa.png"
import whatsappLogo from "../../assets/whatsappLogo.svg"
import drawPsi from "../../assets/drawPsi2.png"
import style from "../Home/style.module.css"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
    return (
        <main className="main bg-zinc-100 lg:h-screen min-w-screen">

            <Header />

            <div className={`content md:mt-5 lg:flex`}>
                <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay:0.5, duration: 0.5 }}
                className={`${style.picMob} hidden justify-center`}>
                    <img src={psicoImg} alt="PsicologaSilviaHelena" className="w-50"/>
                </motion.div>
                
                <div className="left">
                    <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay:0.2, duration: 0.5 }}
                    className="title">
                        <h1 className={`text-7xl font-CreteRound md:ml-15 text-[#262f31] ${style.titleHome}`}>Terapia para seu <br/> bem-estar emocional</h1>
                    </motion.div>
                    <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay:0.2, duration: 0.5 }}
                    className="img+resumo flex items-center gap-x-8">
                        <img src={psicoImg} alt="PsicologaSilviaHelena" className={`w-1/5 ml-15 ${style.psicoImg}`}/>
                        <div className="flex flex-col lg:mr-5">
                            <h1 className={`font-CreteRound md:m-10 mb-10 text-xl md:text-5xl items-center mt-5 ${style.aboutPsi}`}> Sobre a Psicologa</h1>
                            <span className="description text-xl font-CreteRound text-justify md:mr-20 md:text-2xl lg:max-w-2xl mr-15 ml-10">
                                Olá, sou Silvia Helena Tamborim. Com 25 anos dedicados à educação, atuo como Professora Especialista em Educação Inclusiva na Rede Municipal de Ensino de Piracicaba e sou idealizadora do centroSer - Espaço NeuroAfetivo. <br/>Apaixonada por inclusão, desenvolvimento humano e saúde mental, aplico estratégias que combinam neurociência, abordagens histórico-culturais e psicologia clínica para 
                                transformar vidas e potencializar o aprendizado de cada pessoa.
                            </span>
                        </div>
                    </motion.div>
                    <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay:0.2, duration: 0.5 }}
                    className="button flex flex-col ml-10 mr-10 md:ml-15 mt-30 lg:mt-10 gap-y-5">
                        <span className="text font-CreteRound text-xl md:text-2xl">Conheça a psicóloga e seus projetos</span>
                        
                        <div className={`lg:gap-x-10 gap-y-5 flex ${style.btnBottom}`}>

                            <Link to="/psicologa" className="bg-[#f0c8b8] w-46 md:w-auto text-md md:text-2xl font-CreteRound p-4 rounded-2xl cursor-pointer">Conheça a psicóloga</Link>
                            <a href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F551996044947%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnZ2eWqMCHbziaR_y7hnUUFLpzm7WEZMLYyF6pM2pNkORaM-sMeil4o8NNRzY_aem_rbHCUpOkT_6HV-WeyZYT1A&e=AT0P3KqLvX2TAJaCRRLSBahhyTzyHqdFJr7cdQKXBmMryoOBteqxgnz4uzjVR-9bPCzbbs-r3KTjoA_7TfPFpeuSu_oLxfhOb43OC0R5G_lACzPH1Sn0AjD0UQ" target="_blank" className="bg-[#f0c8b8] text-md w-46 md:w-auto md:text-2xl font-CreteRound p-4 rounded-2xl flex justify-center items-center gap-x-5 cursor-pointer">
                                <img src={whatsappLogo} alt="WhatsAppLogo" className="w-9"/>
                                Falar</a>
                        </div>
                    </motion.div>
                </div>

                <div className={`right lg:w-5xl w-1/2 ${style.rightImg}`}>
                    <motion.img 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5}}
                    src={drawPsi} alt="ImagemLateralDesenho"/>
                </div>
            </div>

        </main>
    )
}

export default Home;