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

  // Armazenar os dados localmente
  localStorage.setItem("nome", nome);
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("tel", tel);
  localStorage.setItem("password", password);
  localStorage.setItem("confirmpassword", confirmpassword);

}

function fazerLogin() {
  var email = document.getElementById("emailTelefone").value;
  var senha = document.getElementById("senhaLogin").value;

  // Verificar se as credenciais correspondem às armazenadas localmente
  var emailArmazenado = localStorage.getItem("email");
  var senhaArmazenada = localStorage.getItem("password");
  var senhaConf = localStorage.getItem("confirmpassword");

  if (email === emailArmazenado && senha === senhaArmazenada && senha === senhaConf) {
      alert("Login bem-sucedido!");
      // Redirecionar para a área do usuário
      window.location.href = "src/html/usuario.html";
  }

  else if (senha != senhaConf){
    alert("As senhas digitadas não são idênticas")
  }

  else {
    alert("Credenciais inválidas. Por favor, tente novamente.");
}

}
function fazerLogout() {
  // Remover os dados de login armazenados localmente
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  localStorage.removeItem("senhaConf");
  window.location.href = "/index.html";
  alert("Logout bem-sucedido!");
  // Redirecionar para a página de login ou fazer outra ação desejada
}

function esqueceu() {
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

