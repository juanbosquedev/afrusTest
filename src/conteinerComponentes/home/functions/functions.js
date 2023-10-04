// Función para calcular el descuento
function calcularDescuento() {
    const originalPrice = parseFloat(document.getElementById("originalPrice").value);
    const discountPercentage = parseFloat(document.getElementById("discountPercentage").value);

    if (!isNaN(originalPrice) && !isNaN(discountPercentage)) {
        const discountAmount = (originalPrice * discountPercentage) / 100;
        const finalPrice = originalPrice - discountAmount;
        document.getElementById("result").innerHTML = `Precio Final con Descuento: $${finalPrice.toFixed(2)}`;
    } else {
        document.getElementById("result").innerHTML = "Por favor, ingresa valores válidos.";
    }
}

// Manejo del envío del formulario
document.getElementById("discountForm").addEventListener("submit", function (e) {
    e.preventDefault();
    calcularDescuento();
});