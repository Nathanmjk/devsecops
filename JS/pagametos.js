document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const codigoBarras = document.getElementById('codigoBarras').value;
    const valor = document.getElementById('valor').value;
  
    if (codigoBarras && valor) {
      // Simular pagamento com sucesso
      alert(`Pagamento realizado com sucesso!\nCódigo de Barras: ${codigoBarras}\nValor: R$ ${valor}`);
      // Limpar os campos após o pagamento
      document.getElementById('paymentForm').reset();
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
  