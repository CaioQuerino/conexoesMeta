function lerDados() {
    var nome = document.getElementById("idNome").value;
    var username = document.getElementById("idUsuario").value;
    var email = document.getElementById("idEmail").value;
    var tel = document.getElementById("idCelular").value;
    var password = document.getElementById("idSenha").value;
    var confirmpassword = document.getElementById("idConfirmeSenha").value;

    document.getElementById("nome").innerHTML = nome;
    document.getElementById("username").innerHTML = username;
    document.getElementById("email").innerHTML = email;
    document.getElementById("tel").innerHTML = tel;
    document.getElementById("password").innerHTML = password;
    document.getElementById("confirmpassword").innerHTML = confirmpassword;

    return false;
}

function esquecer(){
    return false;
}
