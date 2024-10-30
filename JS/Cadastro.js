// Função para validar CPF simples (sem validação de dígito verificador para simplificação)
function validarCPF(cpf) {
  return cpf.length === 11 && !isNaN(cpf);
}

// Função para cadastrar o usuário
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const senha = document.getElementById("senha").value;

  // Validações
  if (!validarCPF(cpf)) {
      alert("CPF inválido! Certifique-se de digitar 11 números.");
      return;
  }

  if (localStorage.getItem(cpf)) {
      alert("Usuário com este CPF já está cadastrado!");
      return;
  }

  // Criar o objeto do usuário
  const novoUsuario = {
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      dataNascimento: dataNascimento,
      senha: senha,
      saldo: 1000 // Saldo inicial fictício
  };

  // Armazenar o usuário no localStorage usando o CPF como chave
  localStorage.setItem(cpf, JSON.stringify(novoUsuario));

  alert("Cadastro realizado com sucesso!");

  // Redirecionar para a página de login
  window.location.href = "../HTML/login.html";
});
