// Validación de formulario EcomMundo
// Con seguridad mejorada y mejor gestión de errores

document.getElementById("formularioa").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener valores del formulario
    const telefonoa = document.getElementById("telefono").value.trim();
    const Email = document.getElementById("email").value.trim();
    const postaKodea = document.getElementById("Posta-kodea").value.trim();
    const mezua = document.getElementById("text-karak").value.trim();
    const mezuMotaSeleccionado = document.querySelector('input[name="Mezu mota"]:checked');
    
    // Array de errores
    let errores = [];

    // Validar teléfono (9 dígitos)
    if (!/^\d{9}$/.test(telefonoa)) {
        errores.push("Telefonoa: Sartu 9 zenbaki zuzenak");
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
        errores.push("Email: Emaila ez da balida (@. jarri behar dituzu)");
    }

    // Validar postal code (5 dígitos)
    if (!/^\d{5}$/.test(postaKodea)) {
        errores.push("Posta-kodea: Sartu 5 zenbaki zuzenak");
    }

    // Validar mensaje (mínimo 30 caracteres)
    if (mezua.length < 30) {
        errores.push(`Mezua: Gutxienez 30 karaktere idatzi behar dituzuz (orain: ${mezua.length})`);
    }

    // Validar tipo de mensaje
    if (!mezuMotaSeleccionado) {
        errores.push("Mezu mota: Hautatu mezuaren motaetako bat");
    }

    // Si hay errores, mostrarlos y detener
    if (errores.length > 0) {
        alert("Erroreak formularioan:\n\n" + errores.join("\n"));
        return;
    }

    // Si todo es válido, procesar según tipo de mensaje
    const tiempos = {
        "zalantza": "24 ordutan",
        "kexa": "12 ordutan",
        "beste": "48 ordutan",
        "iradokizuna": "72 ordutan"
    };

    const tiempoEspera = tiempos[mezuMotaSeleccionado.value] || "24 ordutan";
    alert(`Eskerrik asko!\n\n${tiempoEspera} erantzungo dizugu.`);

    // Limpiar formulario tras envío
    document.getElementById("formularioa").reset();
    
    // Aquí podrías enviar datos a un servidor si es necesario
    // console.log({
    //     telefonoa,
    //     Email,
    //     postaKodea,
    //     mezua,
    //     mezuMota: mezuMotaSeleccionado.value
    // });
});

// Validación en tiempo real (opcional)
document.getElementById("telefono")?.addEventListener("input", function(e) {
    this.value = this.value.replace(/\D/g, "").slice(0, 9);
});

document.getElementById("Posta-kodea")?.addEventListener("input", function(e) {
    this.value = this.value.replace(/\D/g, "").slice(0, 5);
});
