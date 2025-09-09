function validarFormulario() {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    const nomeRegex = /^[a-zA-z\s]+$/;

    const nome01 = document.getElementById("nome01").value;
    const cpf01 = document.getElementById("cpf01").value;

    if (!cpfRegex.test(cpf01)) {
        alert("Cpf inválido. Insira com ' . ' e ' - ' ");
        return false;
    }

    if (!nomeRegex.test(nome01)) {
        alert("Nome inválido. Use apenas letras e espaços.");
        return false;
    }

    return true;
}

document.getElementById("textoPrincipal").innerHTML = document.title;