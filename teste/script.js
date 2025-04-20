const dropzone = document.getElementById("dropzone");
const input = document.getElementById("imagem");
const preview = document.getElementById("preview");
const instrucoes = document.getElementById("instrucoes");

function mostrarPreview(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
        preview.src = e.target.result;
        preview.style.display = "block";
        instrucoes.textContent = "Imagem selecionada abaixo:";
        instrucoes.style.display = "block"; // Continua visível, mas com novo texto
    };
    reader.readAsDataURL(file);
}



input.addEventListener("change", () => {
    if (input.files.length > 0) {
        mostrarPreview(input.files[0]);
    }
});

dropzone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropzone.classList.add("hover");
});

dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("hover");
});

dropzone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropzone.classList.remove("hover");
    input.files = e.dataTransfer.files;
    mostrarPreview(input.files[0]);
});

document.addEventListener("paste", (e) => {
    const items = e.clipboardData.items;
    for (let item of items) {
        if (item.type.indexOf("image") !== -1) {
            const file = item.getAsFile();
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            input.files = dataTransfer.files;
            mostrarPreview(file);
            break;
        }
    }
});
