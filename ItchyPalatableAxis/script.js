document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('mainContent').classList.remove('hidden');
});

document.getElementById('tryAgainBtn').addEventListener('click', () => {
  // Esconde o conteúdo principal
  document.getElementById('mainContent').style.display = 'none';

  // Mostra o container de resposta com os botões Sim e Não
  const responseDiv = document.getElementById('responseMessage');
  responseDiv.style.display = 'flex';

  // Esconde a mensagem final caso estivesse visível
  const finalMsg = document.getElementById('finalMessage');
  finalMsg.style.display = 'none';
  finalMsg.textContent = '';
});

document.getElementById('btnSim').addEventListener('click', () => {
  const finalMsg = document.getElementById('finalMessage');
  finalMsg.textContent = "Que ótimo! 💖 Estou aqui esperando sua resposta no WhatsApp, tá? 😉";
  finalMsg.style.color = '#ff9999';
  finalMsg.style.fontWeight = '700';
  finalMsg.style.display = 'block';
});

document.getElementById('btnNao').addEventListener('click', () => {
  const finalMsg = document.getElementById('finalMessage');
  finalMsg.textContent = "Tudo bem, obrigado pelo seu tempo. Desejo o melhor pra você! 🙏";
  finalMsg.style.color = '#ccc';
  finalMsg.style.fontWeight = '600';
  finalMsg.style.display = 'block';
});
