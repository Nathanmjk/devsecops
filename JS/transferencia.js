document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('transferForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio do formulário padrão
  
      // Obtém os valores dos campos
      var valor = document.getElementById('valor').value;
      var destinatario = document.getElementById('destinatario').value;
      var agenciaConta = document.getElementById('agenciaConta').value;
  
      // Valida os campos
      if (valor === '' || destinatario === '' || agenciaConta === '') {
        alert('Todos os campos são obrigatórios!');
        return;
      }
  
      // Aqui você pode adicionar mais validações e lógica para a transferência
      // Por exemplo, fazer uma chamada para a API para processar a transferência
  
      // Feedback ao usuário
      alert('Transferência realizada com sucesso!');
      
      // Limpa os campos após a submissão
      document.getElementById('transferForm').reset();
    });
  });
  