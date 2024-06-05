function lerDados() {
  let nome = document.getElementById("idNome").value;
  let username = document.getElementById("idUsuario").value;
  let email = document.getElementById("idEmail").value;
  let tel = document.getElementById("idCelular").value;
  let password = document.getElementById("idSenha").value;
  let confirmpassword = document.getElementById("idConfirmeSenha").value;

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
  let email = document.getElementById("emailTelefone").value;
  let senha = document.getElementById("senhaLogin").value;

  // Verificar se as credenciais correspondem às armazenadas localmente
  let emailArmazenado = localStorage.getItem("email");
  let senhaArmazenada = localStorage.getItem("password");
  let senhaConf = localStorage.getItem("confirmpassword");

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
  window.location.href = "../../index.html";
  alert("Logout bem-sucedido!");
  // Redirecionar para a página de login ou fazer outra ação desejada
}

function esqueceu() {
  return false;
}

let

