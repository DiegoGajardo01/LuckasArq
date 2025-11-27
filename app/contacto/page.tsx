// app/contacto/page.tsx
'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contacto() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
    alert(t.contactPage.form.success);
    // Resetear el formulario
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">{t.contactPage.title}</h1>
        
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Información de contacto */}
          <div className="lg:w-2/5">
            <div className="bg-gray-100 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">{t.contactPage.contactInfo.title}</h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[rgba(139,79,45,0.1)] p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B4F2D" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{t.contactPage.contactInfo.address}</p>
                    <p className="text-gray-600">{t.contactPage.contactInfo.addressValue}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[rgba(139,79,45,0.1)] p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B4F2D" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{t.contactPage.contactInfo.phone}</p>
                    <p className="text-gray-600">{t.contactPage.contactInfo.phoneValue}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[rgba(139,79,45,0.1)] p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B4F2D" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{t.contactPage.contactInfo.email}</p>
                    <p className="text-gray-600">{t.contactPage.contactInfo.emailValue}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-[rgba(139,79,45,0.1)] p-3 rounded-full">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8B4F2D" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">{t.contactPage.contactInfo.schedule}</p>
                    <p className="text-gray-600">{t.contactPage.contactInfo.scheduleValue}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex gap-4">
                <a href="https://www.instagram.com/luckas.arq" aria-label="Instagram" className="text-[#8B4F2D] hover:opacity-80">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="text-[#8B4F2D] hover:opacity-80">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Formulario de contacto */}
          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">{t.contactPage.form.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">{t.contactPage.form.name}</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4F2D]"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t.contactPage.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4F2D]"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">{t.contactPage.form.phone}</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4F2D]"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">{t.contactPage.form.message}</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B4F2D]"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="inline-block px-6 py-3 bg-[#8B4F2D] text-white font-medium rounded-md hover:bg-[#704026] transition-colors duration-300"
              >
                {t.contactPage.form.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}