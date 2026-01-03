function showSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostra a seção selecionada
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
    }

    // Volta ao topo ao mudar de aba (importante para mobile)
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openModal(src) {
    const modal = document.getElementById("modalZoom");
    const modalImg = document.getElementById("imgExpandida");
    modal.style.display = "flex";
    modalImg.src = src;
}

function closeModal() {
    document.getElementById("modalZoom").style.display = "none";
}

// Fecha o modal ao pressionar a tecla Esc
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});