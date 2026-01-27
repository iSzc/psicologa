import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServicosSelect = ({ value, onChange, error }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const servicos = [
    "Atendimento neuroAfetivo",
    "Saúde e reabilitação",
    "Qualidade de vida e movimento",
    "Acompanhamento e Inclusão",
    "Serviços complementares",
  ];

  const handleSelect = (item) => {
    onChange(item);
    setOpen(false);
  };


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full max-w-xl text-black font-CreteRound">
      
      <div
        className={`border-2 rounded-xl pb-2 pl-4 flex items-center cursor-pointer h-14 lg:text-2xl ${
          error ? "border-red-500" : "border-gray-400"
        }`}
        onClick={() => setOpen(!open)}
      >
        {value || "Selecione um serviço"}
      </div>

    
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

      
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full w-full bg-[#e7e7e7] shadow-lg rounded-md p-2 z-40"
          >
            {servicos.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(item)}
                className="px-2 py-2 hover:bg-gray-300 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicosSelect;
