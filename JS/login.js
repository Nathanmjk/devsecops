document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Captura os valores dos inputs
  const emailCpf = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Verifica se o usuário está registrado no localStorage
  const userData = localStorage.getItem(emailCpf);

  if (userData) {
      const user = JSON.parse(userData);

      // Verifica a senha
      if (user.senha === senha) {
          alert("Login bem-sucedido!");
          // Redireciona para uma página de sucesso ou painel
          window.location.href = "../HTML/painel.html"; // Exemplo de redirecionamento
      } else {
          alert("Senha incorreta!");
      }
  } else {
      alert("Usuário não encontrado!");
  }
});

// Exemplo de função para criar um usuário manualmente (pode ser chamado por outro script ou via console)
function registrarUsuario(emailCpf, senha) {
  const user = {
      emailCpf: emailCpf,
      senha: senha,
      saldo: 1000  // Saldo inicial, por exemplo
  };

  // Armazena o usuário no localStorage
  localStorage.setItem(emailCpf, JSON.stringify(user));
}

// Exemplo de como registrar um usuário (pode ser testado via console ou outro script)
registrarUsuario("usuario@exemplo.com", "senha123");
