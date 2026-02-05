import { useState } from "react";
import ServicosSelect from "./ServicosSelect";
import { motion } from "framer-motion";

function ContatoForm() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    servico: "",
    mensagem: "",
  });

  const [focusedField, setFocusedField] = useState(null);

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <motion.form
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      onSubmit={handleSubmit}
      className={`flex flex-col gap-y-6 w-full lg:ml-3 mt-10`}
    >
      <input
        type="text"
        placeholder="Nome"
        className={`border-2 rounded-xl border-gray-400 lg:h-14 lg:text-2xl pl-4 ${focusedField === "nome" ? "border-dashed border-4 rounded-2xl border-[#ff7f00]" : ""}`}
        value={formData.nome}
        onFocus={() => setFocusedField("nome")}
        onBlur={() => setFocusedField(null)}
        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
      />
      {errors.nome && <p className="text-red-500 text-sm">{errors.nome}</p>}

      <div className="flex flex-col gap-4 w-full">
        <div className="flex-1">
          <input
            type="email"
            placeholder="Email"
            className={`border-2 rounded-xl border-gray-400 w-full lg:h-14 lg:text-2xl pl-4 ${focusedField === "email" ? "border-dashed border-4 rounded border-[#ff7f00]" : ""}`}
            value={formData.email}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        
        <div className="flex-1">
          <input
            type="tel"
            placeholder="Telefone"
            className={`border-2 rounded-xl border-gray-400 pb-1 w-full lg:h-14 lg:text-2xl pl-4 ${focusedField === "telefone" ? "border-dashed border-4 rounded border-[#ff7f00]" : ""}`}
            value={formData.telefone}
            onFocus={() => setFocusedField("telefone")}
            onBlur={() => setFocusedField(null)}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
          />
          {errors.telefone && <p className="text-red-500 text-sm">{errors.telefone}</p>}
        </div>
      </div>

      <ServicosSelect
        value={formData.servico}
        onChange={(servicoSelecionado) => setFormData({ ...formData, servico: servicoSelecionado })}
        error={errors.servico}
      />

      <textarea
        placeholder="Mensagem"
        className={`border-2 rounded-xl border-gray-400 pb-1 h-24 lg:text-2xl pl-4 pt-4 ${focusedField === "mensagem" ? "border-dashed border-4 border-[#ff7f00] rounded" : ""}`}
        value={formData.mensagem}
        onFocus={() => setFocusedField("mensagem")}
        onBlur={() => setFocusedField(null)}
        onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
      />
      {errors.mensagem && <p className="text-red-500 text-sm">{errors.mensagem}</p>}

      <motion.button
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
        type="submit"
        className="bg-black text-white py-2 rounded-md mt-4 lg:w-50 mb-10 cursor-pointer hover:bg-[#cab1b2] hover:text-black hover:font-bold"
      >
        Enviar
      </motion.button>
    </motion.form>
  );
}

export default ContatoForm;