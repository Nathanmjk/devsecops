document.addEventListener('DOMContentLoaded', function() {
    // Função para solicitar um novo cartão
    function requestNewCard() {
      alert('Solicitação de novo cartão enviada com sucesso!');
    }
  
    // Função para bloquear um cartão
    function blockCard() {
      let cardNumber = prompt('Digite o número do cartão que deseja bloquear:');
      if (cardNumber) {
        // Aqui você pode adicionar a lógica para bloquear o cartão, como uma chamada para o backend
        alert(`Cartão ${cardNumber} bloqueado com sucesso!`);
      }
    }
  
    // Adiciona os eventos aos botões
    document.querySelector('.card-management button:nth-of-type(1)').addEventListener('click', requestNewCard);
    document.querySelector('.card-management button:nth-of-type(2)').addEventListener('click', blockCard);
  });
  