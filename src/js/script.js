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

function esqueceu(){
    return false;
}


document.addEventListener("DOMContentLoaded", () => {
    const phoneInput = document.getElementById("idCelular");
    phoneInput.addEventListener("input", handlePhone);
  });
  
  const handlePhone = (event) => {
    let input = event.target;
    input.value = phoneMask(input.value);
  };
  
  const phoneMask = (value) => {
    if (!value) return "";
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };