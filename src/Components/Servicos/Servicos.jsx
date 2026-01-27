import Header from "../Header/Header";
import logoEspaco from "../../assets/logoNeuroAfetivo.png"
import logoIntegra from "../../assets/logoIntegraVida.png"
import { useState } from "react";
import chevronRight from "../../assets/chevron-right.svg"
import chevronLeft from "../../assets/chevron-left.svg"
import { motion, scale } from "framer-motion";

function Servicos() {
    const [buttonChange, setButtonChange] = useState(false);
    const [imgChange, setImgChange] = useState(false);

    const neuroAfetivo = () => (
        <div className="flex flex-col gap-y-8 lg:ml-10 mt-10 lg:mt-20 ml-10 mr-10">
            <h2 className="lg:text-2xl text-lg font-bold text-[#ff7f00]">Psicologia, Psicopedagogia e Reforço Escolar</h2>
            <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Atendimentos especializados para crianças, adolescentes e adultos, incluindo suporte no aprendizado e desenvolvimento acadêmico.</p>

            <h2 className="lg:text-2xl text-lg font-bold text-[#ff7f00]">Atendimento Humanizado e Espaço de Acolhimento</h2>
            <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Um ambiente seguro para expressar emoções e pensamentos, com escuta ativa, respeito e empatia para cada história única.</p>

            <h2 className="lg:text-2xl text-lg font-bold text-[#ff7f00]">Desenvolvimento Emocional e Cognitivo</h2>
            <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Promovemos o crescimento pessoal e a superação de desafios através de terapias integradas.</p>

            <h2 className="lg:text-2xl text-lg font-bold text-[#ff7f00]">Atendimento Presencial e Online</h2>
            <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Atendemos da forma que você mais desejar e se sentir confortável.</p>
        </div>
    );

    const integraVida = () => (
        <div className="lg:flex">
                <div className="flex flex-col gap-y-20 lg:ml-10 mt-10 lg:mt-15 ml-5 mr-5">
                    <div className="flex flex-col gap-y-2">
                        <h2 className="lg:text-2xl text-lg font-bold text-[#ff7f00]">Atendimento Neuroafetivo e Psicológico</h2>
                        <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Atendimento psicológico domiciliar ou online.</p>
                        <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Apoio emocional e estimulação cognitiva para idosos e adultos.</p>
                        <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Treinamento de cuidadores e familiares.</p>
                        <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Oficinas de memória, atenção e linguagem.</p>
                        <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Intervenções psicopedagógicas para dificuldades cognitivas ou sequelas neurológicas.</p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <h2 className="lg:text-2xl text-lg font-bold text-[#ff7f00]">Saúde e Reabilitação</h2>
                        <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Fisioterapia preventiva, motora e pós-operatória.</p>
                        <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Fonoaudiologia voltada à comunicação, deglutição e reabilitação vocal.</p>
                        <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Terapia ocupacional para indepêndencia nas atividades diárias.</p>
                        <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Nutrição com foco em bem-estar, saúde e longevidade.</p>
                        <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Cuidados de enfermagem domiciliar (curativos, aferição de sinais vitais, administração de medicamentos).</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex flex-col gap-y-20 lg:ml-10 ml-5 mr-5">
                        <div className="flex flex-col gap-y-1">
                            <h1 className="lg:text-2xl text-lg font-bold text-[#ff7f00]">Qualidade de vida e Movimento</h1>
                            <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Atividade física adaptada e personalizada.</p>
                            <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Aulas de alongamento, yoga ou pilates suave.</p>
                            <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Caminhadas e exercícios supervisionados.</p>
                            <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Dança e expressão corporal como recurso terapêutico.</p>
                        </div>  
                        <div className="flex flex-col gap-y-1">
                            <h1 className="lg:text-2xl text-lg font-bold text-[#ff7f00]">Acompanhamento e Inclusão</h1>
                            <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Acompanhantes especializados para consultas, exames, eventos e passeios.</p>
                            <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Apoio em idas ao supermercado, atividades sociais e culturais.</p>
                            <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Acompanhamento em viagens curtas e eventos familiares.</p>
                            <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Transporte adaptado e seguro.</p>
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <h1 className="lg:text-2xl text-lg font-bold text-[#ff7f00]">Serviços Complementares</h1>
                            <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Consultoria em acessibilidade e adaptação de ambientes domiciliares.</p>
                            <p className="lg:text-lg text-sm mt-5 lg:mt-0 font-bold">Cuidados paleativos com equipe multiprofissional.</p>
                        </div>
                </div>
                </div>
                
            </div>
    );

    return (
        <main className="relative min-h-screen bg-zinc-100">

            <Header />

            <motion.div 
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full flex mt-10">
                <img
                    className="w-64 ml-10"
                    src={imgChange ? logoIntegra : logoEspaco}
                    alt="LogoCentroSer"
                />
            </motion.div>

            <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="pb-28">
                {buttonChange ? integraVida() : neuroAfetivo()}
            </motion.div>

            <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute bottom-0 left-0 w-full py-4 flex items-center justify-center ">
                <div className="flex justify-center items-center gap-x-8 bg-zinc-200 rounded-2xl px-6 py-2">

                    <motion.button
                        onClick={() => {
                            setButtonChange(false);
                            setImgChange(false);
                        }}
                        whileHover={{ scale: 1.5 }}
                        className="cursor-pointer"
                    >
                        <img src={chevronLeft} alt="ChevronLeft" className="w-7" />
                    </motion.button>

                    <span className="font-bold">
                        Página {buttonChange ? "2/2" : "1/2"}
                    </span>

                    <motion.button
                        onClick={() => {
                            setButtonChange(true);
                            setImgChange(true);
                        }}
                        whileHover={{ scale: 1.5 }}
                        className="cursor-pointer"
                    >
                        <img src={chevronRight} alt="ChevronRight" className="w-7" />
                    </motion.button>

                </div>
            </motion.div>

        </main>
    );
}

export default Servicos;




















