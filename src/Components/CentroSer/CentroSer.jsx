import Header from "../Header/Header";
import drawPsi from "../../assets/drawPsi2.png"
import logoEspaco from "../../assets/logoNeuroAfetivo.png"
import logoIntegra from "../../assets/logoIntegraVida.png"
import style from "../CentroSer/style.module.css"
import { useState } from "react";
import { motion } from "framer-motion";
import whatsappLogo from "../../assets/whatsappLogo.svg"
import psicoImg from "../../assets/psicologa.png"


function CentroSer() {
    const [imgChange, setImgChange] = useState(false)
    const [buttonChange, setButtonChange] = useState(true)

    const neuroAfetivo = () => {
        return (
            <p>
                Centro Ser - Espaço NeuroAfetivo é um ambiente dedicado ao cuidado da mente e das emoções.
                    O espaço nasceu com o propósito de unir neurociência, afeto e práticas terapêuticas em atendimentos voltados ao desenvolvimento humano em todas as fases da vida. Nossa missão é promover saúde emocional e bem-estar, oferecendo um acolhimento humanizado, ético e empático.
                    Atuamos com base em abordagens contemporâneas da psicologia - como a Terapia Cognitivo-Comportamental (TCC) e a Terapia Comportamental Dialética (DBT), integrando-as com estratégias que respeitam a singularidade de cada pessoa. 
                    Além dos atendimentos psicológicos individuais e em grupo, o CentroSer promove ações de psicoeducação, desenvolvimento socioemocional, oficinas terapêuticas e projetos interdisciplinares. Nosso olhar é sensivel à diversidade humana, incluindo o acompanhamento de crianças, adolescentes, adultos e idosos com diferentes perfis. 
            </p>
        )
    }

    const integraVida = ()=> {
            return (
                <p>
                    O Centro Ser Integravida amplia o propósito do cuidado, reunindo profissionais de diferentes áreas da saúde e desenvolvimento humano para um trabalho integrado e colaborativo. Nossa equipe inclui psicólogos, psicopedagogos, fonoaudiólogos, fisioterapeutas, educadores físicos, entre outros, todos comprometidos com o bem-estar e o crescimento das pessoas. Acreditamos que o verdadeiro bem-estar nasce da integração entre mente, corpo e relações, por isso valorizamos a atuação interdisciplinar e o diálogo entre saberes. Nosso objetivo é oferecer um espaço de desenvolvimento humano, onde o conhecimento técnico se une à escuta sensível, criando caminhos para o equilíbrio emocional, a aprendizagem significativa e a qualidade de vida. <br/>CentroSer IntegraVida — Cuidar de pessoas é cuidar da vida.<br/>
                    Mais do que atender, o CentroSer - IntegraVida se dedica a cuidar com presença e afeto. Nosso conceito neuroafetivo une o conhecimento técnico às relações humanas, reconhecendo que o bem-estar nasce do equilíbrio entre o corpo, o cérebro e o coração.
                </p>
            )
        }


    return (
        <main className="main bg-zinc-100 h-screen">
            <Header/>
            <div className={`content lg:flex md:mt-5`}>
                <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay:0.5, duration: 0.5 }}
                className="left flex flex-col 2xl:w-1/2 xl:ml-15 lg:mr-15 l lg:h-full items-center gap-y-10">
                    <div className="mt-15 lg:mt-0">
                        <img src={`${imgChange ? logoEspaco : logoIntegra}`} 
                        alt="LogoCentroSer" className="lg:w-100 w-60"/>
                    </div>
                    <div className="textLeft lg:h-[430px] xl:w-5xl lg:ml-20
                    mr-10 ml-10 xl:ml-30 overflow-y-auto">
                        <p className="md:text-2xl text-justify font-CreteRound">
                            {buttonChange ? integraVida() : neuroAfetivo() }
                        </p>
                    </div>  
                    <div className="buttons flex gap-x-10 w-full mb-10 lg:mb-0 lg:ml-50">
                       <motion.button onClick={() => {setButtonChange(true)
                        setImgChange(false)
                       }} className={`lg:w-5 lg:h-5 w-3 h-3 bg-zinc-800 rounded-3xl ml-10 cursor-pointer lg:hover:bg-[#ff8610]
                       `}>
                       </motion.button>
                       <button onClick={() => {
                        setButtonChange(false)
                        setImgChange(true)
                        }}
                        className={`lg:w-5 lg:h-5 w-3 h-3 bg-zinc-800 rounded-3xl cursor-pointer lg:hover:bg-[#ff8610]`}>
                       </button>
                    </div>
                </motion.div>
                <div className={`right ${style.rightImg} xl:absolute right-0 w-178 `}>
                    <motion.img
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay:0.5, duration: 0.5 }}
                    src={drawPsi} alt="ImagemLateralDesenho" className=""/>
                </div>
            </div>
        </main>
        
    )
}

export default CentroSer;



