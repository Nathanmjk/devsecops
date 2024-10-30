document.addEventListener('DOMContentLoaded', function() {
    // Evento para o botão de logout
    document.querySelector('.logout-message button').addEventListener('click', function() {
      // Redireciona para a tela inicial após logout
      window.location.href = 'index.html';
    });
  });
  