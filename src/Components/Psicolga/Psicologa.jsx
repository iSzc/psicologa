import Header from "../Header/Header"
import psicoImg from "../../assets/psicologa.png"
import style from "../Psicolga/style.module.css"
import { motion } from "framer-motion"

function Psicologa() {
    return (
        <main>
            <Header />
            <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="content flex items-center justify-center xl:gap-x-20 xl:mr-10 xl:mt-20 mt-10 ml-10 mr-10 pb-10">
                <div className={`max-w-100 xl:ml-20 ${style.psicoImg}`}>
                    <img src={psicoImg} alt="PsicologaSilviaHelena" />
                </div>
                <div className="flex flex-col items-center gap-y-5">
                    <h1 className="text-4xl font-CreteRound">Sobre a Psicóloga e seus Projetos</h1>
                    <div className="flex flex-col gap-y-5  xl:w-[1200px] font-CreteRound">
                        <p className="xl:text-xl text-lg text-justify">Sou Silvia Helena Tamborim, psicóloga e educadora com uma trajetória de mais de 25 anos dedicados à educação e ao desenvolvimento humano.<br/>
                        Iniciei minha caminhada profissional na AUMA - Associação dos Amigos da Criança Autista, onde tive minhas primeiras experiências no atendimento a criança com autismo, aprendendo na prática o valor da escuta, da paciência e do respeito às singularidades.<br/>
                        Posteriormente, atuei como professora na Educação Infantil em escola particular, período em que aprofundei meu olhar para o desenvolvimento infantil e para o papel das relações afetivas no aprendizado.
                        </p>
                        <strong className="text-lg xl:text-xl">CentroSer - Espaço NeuroAfetivo</strong>
                        <p className="xl:text-xl text-lg  text-justify">
                        Fui também sócia-proprietária de uma escola de Educação Infantil, experiência que ampliou meu entendimento sobre gestão escolar, equipe pedagógica e os desafios da educação de qualidade.<br/>
                        Mais tarde, ingressei na Rede Municipal de Piracicaba, inicialmente como professora de Educação Infantil e, desde 2010, atuo como Professora Especialista em Atendimento Educacional Especializado (AEE), com foco na inclusão de alunos com deficiência e nas prática que promovem a aprendizagem significativa para todos.<br/>
                        Sou idealizadora e diretora do <strong>CentroSer - Espaço NeuroAfetivo</strong>  e do <strong>CentroSer IntegraVida</strong>, espaços voltados ao cuidado integral, à saúde mental e à pratica interdisciplinar.
                        </p>
                    </div>
                </div>
            </motion.div>

            
        </main>
    )
}



export default Psicologa;