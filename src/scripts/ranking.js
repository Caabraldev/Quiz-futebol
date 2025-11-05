// ==== VARIÁVEIS ====
const startBox = document.getElementById('startBox');
const startBtn = document.getElementById('startBtn');
const playerNameInput = document.getElementById('playerName');
const quizContainer = document.getElementById('quiz-container');
const rankingBox = document.getElementById('rankingBox');
const rankingTableBody = document.querySelector('#rankingTable tbody');
const backBtn = document.getElementById('backBtn');

let playerName = '';
let startTime;

// ==== INICIAR O QUIZ ====
startBtn.addEventListener('click', () => {
  const name = playerNameInput.value.trim();

  if (name === '') {
    alert('Digite seu nome para jogar!');
    return;
  }

  playerName = name;
  localStorage.setItem('playerName', playerName);

  startBox.style.display = 'none';
  quizContainer.style.display = 'block';

  startTime = Date.now(); // marca o início do tempo
});

// ==== FINALIZAR O QUIZ ====
function finalizarQuiz(totalCorretas, totalPerguntas) {
  const endTime = Date.now();
  const tempoTotal = Math.floor((endTime - startTime) / 1000);

  const pontuacao = (totalCorretas * 1000) - (tempoTotal * 10);
  const score = Math.max(pontuacao, 0);

  // Cria objeto do jogador
  const player = {
    nome: playerName,
    acertos: totalCorretas,
    tempo: tempoTotal,
    score: score
  };

  // Pega ranking atual
  let ranking = JSON.parse(localStorage.getItem('ranking')) || [];
  ranking.push(player);

  // Ordena por score e tempo
  ranking.sort((a, b) => {
    if (b.score === a.score) return a.tempo - b.tempo;
    return b.score - a.score;
  });

  // Mantém só os 10 melhores
  ranking = ranking.slice(0, 10);
  localStorage.setItem('ranking', JSON.stringify(ranking));

  // Mostra resultado final + botão ver ranking
  quizContainer.innerHTML = `
    <div class="end-screen">
      <h2>🏁 Fim do Quiz!</h2>
      <p>${playerName}, você acertou <b>${totalCorretas}</b> de ${totalPerguntas} perguntas.</p>
      <p>⏱️ Tempo total: <b>${tempoTotal}s</b></p>
      <p>💯 Pontuação final: <b>${score}</b></p>
      <button onclick="mostrarRanking()">Ver Ranking</button>
      <button onclick="location.reload()">Jogar Novamente</button>
    </div>
  `;
}

// ==== MOSTRAR RANKING ====
function mostrarRanking() {
  quizContainer.style.display = 'none';
  rankingBox.style.display = 'block';
  atualizarRanking();
}

// ==== VOLTAR ====
backBtn.addEventListener('click', () => {
  rankingBox.style.display = 'none';
  location.reload(); // recarrega pra novo jogo
});

// ==== ATUALIZAR RANKING ====
function atualizarRanking() {
  const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
  rankingTableBody.innerHTML = '';

  ranking.forEach((p, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td>${p.nome}</td>
      <td>${p.acertos}</td>
      <td>${p.tempo}</td>
      <td>${p.score}</td>
    `;
    rankingTableBody.appendChild(tr);
  });
}
