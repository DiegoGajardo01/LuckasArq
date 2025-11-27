export type Language = 'es' | 'en';

export const translations = {
  es: {
    // Navigation
    nav: {
      home: 'Home',
      proyectos: 'Proyectos',
    },
    // Home Page
    home: {
      servicios: 'SERVICIOS',
      // Services
      architecturalDesign: {
        title: 'Diseño Arquitectónico',
        description: 'Diseñamos espacios Residenciales y Comerciales que son el eco de tu visión. Fusionamos la rigurosidad técnica con la sensibilidad de la luz, el material y el contexto.',
      },
      interiorDesign: {
        title: 'Diseño de Interiores',
        description: 'Construimos atmósferas con materiales nobles que maximizan el confort y la funcionalidad del espacio.',
      },
      regularization: {
        title: 'Regularización de Viviendas',
        description: 'Formalizamos tu construcción ante la DOM (Dirección de Obras Municipales). Evaluamos las posibles vías de regularización bajo normativa OGUC para agilizar el trámite.',
      },
      surveys3d: {
        title: 'Levantamientos 3D',
        description: 'Realizamos Levantamientos Fotogramétricos con Drones, una técnica que usa miles de fotografías aéreas georreferenciadas para construir un Modelo 3D exacto de tu terreno y edificación.',
      },
      electricalProjects: {
        title: 'Proyectos Eléctricos SEC',
        description: 'Diseñamos y construimos proyectos eléctricos certificados por especialistas SEC, priorizando la economía y la optimización energética de tu instalación.',
      },
    },
    // Contact Form
    contact: {
      title: 'Contáctame',
      description: 'Ponte en contacto conmigo para diseño arquitectónico, diseño de interiores, trámites municipales, o cualquier otra consulta.',
      form: {
        name: 'Nombre y Apellido',
        namePlaceholder: 'Ingresa tu nombre',
        email: 'Email',
        emailPlaceholder: 'Ingresa tu dirección de email',
        phone: 'Teléfono',
        phonePlaceholder: 'Ingresa tu número de teléfono',
        city: 'Ciudad',
        cityPlaceholder: 'Ingresa tu ciudad',
        topic: 'Tema',
        topicPlaceholder: 'Selecciona un tema',
        message: 'Mensaje',
        messagePlaceholder: 'Ingresa tu mensaje (máximo 1000 caracteres)',
        characters: 'caracteres',
        send: 'Enviar Mensaje',
        sending: 'Enviando...',
        topics: {
          architecturalDesign: 'Diseño Arquitectónico',
          interiorDesign: 'Diseño de Interiores',
          housingRegularization: 'Regularización de Viviendas',
          surveys3d: 'Levantamientos 3D',
          electricalProjects: 'Proyectos Eléctricos SEC',
          other: 'Otro',
        },
      },
      messages: {
        success: '¡Éxito!',
        successDescription: 'Tu mensaje ha sido enviado correctamente.',
        error: 'Error',
        errorRequired: 'Por favor completa todos los campos obligatorios.',
        errorEmail: 'Por favor ingresa una dirección de email válida.',
        errorMessageLength: 'El mensaje debe tener menos de 1000 caracteres.',
        errorSend: 'No se pudo enviar el mensaje. Por favor intenta de nuevo.',
      },
    },
    // Projects Page
    projects: {
      title: 'Nuestros Proyectos',
      casaModerna: {
        title: 'Casa Moderna',
        description: 'Diseño minimalista que combina funcionalidad y estética.',
      },
      apartamentoUrbano: {
        title: 'Apartamento Urbano',
        description: 'Solución espacial para aprovechar cada metro cuadrado.',
      },
      oficinaCorporativa: {
        title: 'Oficina Corporativa',
        description: 'Espacios de trabajo que fomentan la creatividad y productividad.',
      },
    },
    // Footer
    footer: {
      rights: '© 2025 LuckasArq. Todos los derechos reservados.',
    },
    // Contact Page
    contactPage: {
      title: 'Contacto',
      contactInfo: {
        title: 'Información de contacto',
        address: 'Dirección',
        addressValue: 'Buenos Aires, Argentina',
        phone: 'Teléfono',
        phoneValue: '+54 9 11 1234-5678',
        email: 'Email',
        emailValue: 'contacto@luckasarq.com',
        schedule: 'Horario de atención',
        scheduleValue: 'Lun - Vie: 9:00 - 18:00',
      },
      form: {
        title: 'Envíanos un mensaje',
        name: 'Nombre completo',
        email: 'Correo electrónico',
        phone: 'Teléfono',
        message: 'Mensaje',
        send: 'Enviar mensaje',
        success: 'Mensaje enviado correctamente',
      },
    },
  },
  en: {
    // Navigation
    nav: {
      home: 'Home',
      proyectos: 'Projects',
    },
    // Home Page
    home: {
      servicios: 'SERVICES',
      // Services
      architecturalDesign: {
        title: 'Architectural Design',
        description: 'We design Residential and Commercial spaces that echo your vision. We combine technical rigor with sensitivity to light, material, and context.',
      },
      interiorDesign: {
        title: 'Interior Design',
        description: 'We create atmospheres with noble materials that maximize comfort and space functionality.',
      },
      regularization: {
        title: 'Housing Regularization',
        description: 'We formalize your construction with the DOM (Municipal Works Directorate). We evaluate possible regularization paths under OGUC regulations to expedite the process.',
      },
      surveys3d: {
        title: '3D Surveys',
        description: 'We perform Photogrammetric Surveys with Drones, a technique that uses thousands of georeferenced aerial photographs to build an exact 3D Model of your land and building.',
      },
      electricalProjects: {
        title: 'SEC Electrical Projects',
        description: 'We design and build electrical projects certified by SEC specialists, prioritizing economy and energy optimization of your installation.',
      },
    },
    // Contact Form
    contact: {
      title: 'Contact Me',
      description: 'Get in touch with me for architectural design, interior design, municipal procedures, or any other inquiry.',
      form: {
        name: 'Full Name',
        namePlaceholder: 'Enter your name',
        email: 'Email',
        emailPlaceholder: 'Enter your email address',
        phone: 'Phone',
        phonePlaceholder: 'Enter your phone number',
        city: 'City',
        cityPlaceholder: 'Enter your city',
        topic: 'Topic',
        topicPlaceholder: 'Select a topic',
        message: 'Message',
        messagePlaceholder: 'Enter your message (maximum 1000 characters)',
        characters: 'characters',
        send: 'Send Message',
        sending: 'Sending...',
        topics: {
          architecturalDesign: 'Architectural Design',
          interiorDesign: 'Interior Design',
          housingRegularization: 'Housing Regularization',
          surveys3d: '3D Surveys',
          electricalProjects: 'SEC Electrical Projects',
          other: 'Other',
        },
      },
      messages: {
        success: 'Success!',
        successDescription: 'Your message has been sent successfully.',
        error: 'Error',
        errorRequired: 'Please complete all required fields.',
        errorEmail: 'Please enter a valid email address.',
        errorMessageLength: 'The message must be less than 1000 characters.',
        errorSend: 'Could not send message. Please try again.',
      },
    },
    // Projects Page
    projects: {
      title: 'Our Projects',
      casaModerna: {
        title: 'Modern House',
        description: 'Minimalist design that combines functionality and aesthetics.',
      },
      apartamentoUrbano: {
        title: 'Urban Apartment',
        description: 'Spatial solution to make the most of every square meter.',
      },
      oficinaCorporativa: {
        title: 'Corporate Office',
        description: 'Workspaces that foster creativity and productivity.',
      },
    },
    // Footer
    footer: {
      rights: '© 2025 LuckasArq. All rights reserved.',
    },
    // Contact Page
    contactPage: {
      title: 'Contact',
      contactInfo: {
        title: 'Contact Information',
        address: 'Address',
        addressValue: 'Buenos Aires, Argentina',
        phone: 'Phone',
        phoneValue: '+54 9 11 1234-5678',
        email: 'Email',
        emailValue: 'contacto@luckasarq.com',
        schedule: 'Business Hours',
        scheduleValue: 'Mon - Fri: 9:00 - 18:00',
      },
      form: {
        title: 'Send us a message',
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        send: 'Send message',
        success: 'Message sent successfully',
      },
    },
  },
};

