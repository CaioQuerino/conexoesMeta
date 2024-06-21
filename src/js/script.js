function validar(nome, username, email, tel, password, confirmpassword){

  if(confirmpassword !== password){
    document.getElementById('erroPassword').innerHTML = 'As senhas não são iguais';
  }
  else{
    document.getElementById('erroPassword').innerHTML = '';

  }
  if(tel == ""){
    document.getElementById('erroTel').innerHTML = 'Campo obrigatório';
  }
  else{
    document.getElementById('erroTel').innerHTML = '';
  }
  if(email == ""){
    document.getElementById('erroEmail').innerHTML = 'Campo obrigatório';
  }
  else{
    document.getElementById('erroEmail').innerHTML = '';
  }
  if(username == ""){
    document.getElementById('erroUser').innerHTML = 'Campo obrigatório';
  }
  else{
    document.getElementById('erroUser').innerHTML = '';
  }
  if(nome == ""){
    document.getElementById('erroNome').innerHTML = 'Campo obrigatório';
  }
  else{
    document.getElementById('erroNome').innerHTML = '';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('erroEmail').innerHTML = 'Email invalido';
  }

  if(nome !== "" && username !== "" && email !== "" && tel !== "" && password  === confirmpassword){
    localStorage.setItem("email", email);

    localStorage.setItem("password", password);
  
    localStorage.setItem("confirmpassword", confirmpassword);

    document.getElementById("erroLogin").innerHTML = '';

    document.getElementById('msgRegistro').innerHTML = 'Registrado com sucesso!';


    document.getElementById('idNome').value = '';

    document.getElementById('idUsuario').value = '';

    document.getElementById('idEmail').value = '';

    document.getElementById('idCelular').value = '';

    document.getElementById('erroNome').value = '';

    document.getElementById("idSenha").value = '';

    document.getElementById("idConfirmeSenha").value = '';

  
  }
}


function lerDados() {
  let nome = document.getElementById("idNome").value;
  let username = document.getElementById("idUsuario").value;
  let email = document.getElementById("idEmail").value;
  let tel = document.getElementById("idCelular").value;
  let password = document.getElementById("idSenha").value;
  let confirmpassword = document.getElementById("idConfirmeSenha").value;

  validar(nome, username, email, tel, password, confirmpassword)

}

function fazerLogin() {
    email = document.getElementById("emailTelefone").value;
    senha = document.getElementById("senhaLogin").value;

      // Verificar se as credenciais correspondem às armazenadas localmente
      let emailArmazenado = localStorage.getItem("email");
      let senhaArmazenada = localStorage.getItem("password");
      let senhaConf = localStorage.getItem("confirmpassword");

      if (email === emailArmazenado && senha === senhaArmazenada && senha === senhaConf) {
          // Redirecionar para a área do usuário
          window.location.href = "src/html/usuario.html";
      }
      else {
        document.getElementById('msgRegistro').innerHTML = '';

        document.getElementById("erroLogin").innerHTML = 'A senha ou e-mail está errada!';

}

}
function fazerLogout() {
  // Remover os dados de login armazenados localmente
  localStorage.removeItem("email");
  localStorage.removeItem("password");
  localStorage.removeItem("confirmpassword");
  window.location.href = "../../index.html";
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

const validateEmail = (event) => {
  let input = event.target;
  let email = input.value;
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
};

function acendeApaga(){
  
  let body = document.querySelector('body');
  if(body.classList.contains('dark')){
    body.classList.remove('dark');
    body.classList.add('light');
    
  }
  else {
    body.classList.remove('light');
    body.classList.add('dark');
  }
}