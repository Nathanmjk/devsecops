// Função para filtrar o extrato por data
function filterStatement() {
    // Obter a data selecionada
    const date = document.getElementById('data').value;
  
    if (date) {
      // Aqui você pode adicionar lógica para filtrar o extrato com base na data
      alert(`Filtrando extrato para a data: ${date}`);
    } else {
      alert('Por favor, selecione uma data.');
    }
  }
  
  // Função para exportar o extrato como PDF (placeholder)
  function exportPDF() {
    // Aqui você pode adicionar lógica para exportar o extrato como PDF
    alert('Exportar PDF ainda não implementado.');
  }
  
  // Adicionar eventos aos botões
  document.querySelector('button[onclick="filterStatement()"]').addEventListener('click', filterStatement);
  document.querySelector('button[onclick="exportPDF()"]').addEventListener('click', exportPDF);
  