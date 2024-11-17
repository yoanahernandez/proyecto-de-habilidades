document.addEventListener("DOMContentLoaded", () => {
    const tacoForm = document.getElementById("taco-form");
    const inventoryBody = document.getElementById("inventory-body");

    // Función para agregar un taco al inventario
    function addTaco(name, quantity, unit) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${name}</td>
            <td>
                <span class="quantity-text">${quantity}</span>
                <input type="number" class="quantity-input" value="${quantity}" min="1" style="display: none;">
            </td>
            <td>${unit}</td>
            <td>
                <button onclick="editTaco(this)">Editar</button>
                 <br><br>
                <button onclick="saveTaco(this)" style="display: none;">Guardar</button>
                <button onclick="removeTaco(this)">Eliminar</button>
            </td>
        `;

        inventoryBody.appendChild(row);
    }

    // Función para eliminar un taco del inventario
    window.removeTaco = (button) => {
        const row = button.parentElement.parentElement;
        inventoryBody.removeChild(row);
    };

    // Función para editar la cantidad de un taco
    window.editTaco = (button) => {
        const row = button.parentElement.parentElement;
        const quantityText = row.querySelector(".quantity-text");
        const quantityInput = row.querySelector(".quantity-input");
        const saveButton = button.nextElementSibling;

        quantityText.style.display = "none";
        quantityInput.style.display = "inline";
        button.style.display = "none";
        saveButton.style.display = "inline";
    };

    // Función para guardar la cantidad editada
    window.saveTaco = (button) => {
        const row = button.parentElement.parentElement;
        const quantityText = row.querySelector(".quantity-text");
        const quantityInput = row.querySelector(".quantity-input");
        const editButton = button.previousElementSibling;

        const newQuantity = quantityInput.value;
        quantityText.textContent = newQuantity;

        quantityText.style.display = "inline";
        quantityInput.style.display = "none";
        button.style.display = "none";
        editButton.style.display = "inline";
    };

    // Manejo del evento de submit del formulario
    tacoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("nombre").value.trim();
        const quantity = parseInt(document.getElementById("cantidad").value);
        const unit = document.getElementById("unidad").value;

        if (name && quantity > 0) {
            addTaco(name, quantity, unit);
            tacoForm.reset();
        }
    });
});
