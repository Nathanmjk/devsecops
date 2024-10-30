document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
  
    if (nome && email && telefone && endereco) {
      // Simulação de sucesso
      alert('Dados do perfil atualizados com sucesso!');
      // Aqui você pode adicionar a lógica para enviar os dados ao servidor.
    } else {
      // Exemplo de erro
      alert('Por favor, preencha todos os campos.');
    }
  });
  