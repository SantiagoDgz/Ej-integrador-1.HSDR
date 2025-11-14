function calcular() {
    total = 0;

    // CONSULTAS
    if (document.getElementById("primera-consulta").checked) {
        total = total + 850;
    } else if (document.getElementById("seguimiento").checked) {
        total = total + 700;
    } else if (document.getElementById("paquete-de-3").checked) {
        total = total + 2000;
    } else if (document.getElementById("pareja").checked) {
        total = total + 5000;
    }

    // ADICIONALES
    if (document.getElementById("recetas").checked) {
        total = total + 1000;
    }
    if (document.getElementById("ejercicios").checked) {
        total = total + 1000;
    }
    if (document.getElementById("revista").checked) {
        total = total + 150;
    }

    // ANALISIS
    analisis = document.getElementById("analisis").value;
    total = total + analisis * 1;

    // PAGO
    porcentaje = document.getElementById("tipo-pago").value;
    total = total + (total * porcentaje * 1);

    // FACTURA
    factura = document.getElementById("FAC").value;
    if (factura == "si") {
        total = total + (total * 0.16);
    }

    alert("El total es: $" + total);
}