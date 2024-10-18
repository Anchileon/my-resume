// In /src/i18n.js
import i18next from 'i18next';

i18next.init({
    lng: 'en', // default language
    resources: {
        en: {
            translation: {
                welcome: "Welcome to My Resume",
                contact: "Contact",
                location: "Location",
                phone: "Phone",
                email: "Email",
                education: "Education",
                projects: "Projects",
                languages: "Languages",
                employmentHistory: "Employment History",
                skills: "Skills",
                // Add other translations here
            }
        },
        es: {
            translation: {
                welcome: "Bienvenido a Mi Currículum",
                contact: "Contacto",
                location: "Ubicación",
                phone: "Teléfono",
                email: "Correo Electrónico",
                education: "Educación",
                projects: "Proyectos",
                languages: "Idiomas",
                employmentHistory: "Historial Laboral",
                skills: "Habilidades",
                // Add other translations here
            }
        }
    }
});

export default i18next;
