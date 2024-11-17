document.addEventListener("DOMContentLoaded", () => {
    console.log("Bienvenido a La Casa del Taco");
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".menu-section");

    // Función para mostrar solo la sección activa
    function showSection(sectionId) {
        sections.forEach((section) => {
            if (section.id === sectionId) {
                section.classList.remove("hidden");
            } else {
                section.classList.add("hidden");
            }
        });
    }

    // Añadir evento de clic a cada enlace del menú
    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevenir el comportamiento por defecto
            const sectionId = link.getAttribute("data-section");
            showSection(sectionId);
        });
    });

    // Mostrar la primera sección por defecto
    if (sections.length > 0) {
        showSection(sections[0].id);
    }
});
