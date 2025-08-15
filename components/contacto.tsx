"use client";

import React, { useState } from "react";

const Contacto: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consulta, setConsulta] = useState("Diseño Arquitectónico");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta: ${consulta}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:tucorreo@dominio.com?subject=${subject}&body=${body}`;
    setName("");
    setEmail("");
    setConsulta("Diseño Arquitectónico");
    setMessage("");
  };

  return (
    <section className="bg-[#f9f9f9] py-12 md:py-16 lg:py-20">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg text-black">
        <h2 className="text-2xl font-bold mb-6 text-black">Contáctame</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded text-black placeholder-gray-400 focus:outline-none focus:ring-2"
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-2 rounded text-black placeholder-gray-400 focus:outline-none focus:ring-2"
            required
          />
          <select
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
            className="border p-2 rounded text-black focus:outline-none focus:ring-2"
          >
            <option>Diseño Arquitectónico</option>
            <option>Diseño de Interiores</option>
            <option>Trámites DOM</option>
            <option>Otros</option>
          </select>
          <textarea
            placeholder="Mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="border p-2 rounded text-black placeholder-gray-400 focus:outline-none focus:ring-2"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;
