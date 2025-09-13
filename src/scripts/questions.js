$(document).ready(function () {
    const quiz = [
      { q: "Qual seleção ganhou a Copa de 2002?", opts: ["Brasil", "Alemanha", "França"], ans: "Brasil" },
      { q: "Quem é o maior artilheiro da Champions League?", opts: ["Cristiano Ronaldo", "Messi", "Benzema"], ans: "Cristiano Ronaldo" },
      { q: "Qual clube é conhecido como 'Reds'?", opts: ["Chelsea", "Liverpool", "Arsenal"], ans: "Liverpool" },
      { q: "Quantas Copas o Brasil tem?", opts: ["4", "5", "6"], ans: "5" },
      { q: "Quantas champions o barcelona tem?", opts: ["4", "5", "6"], ans: "5" },
      { q: "Quias desses jogadores nunca passou no barcelona?", opts: ["Coutinho", "Eto", "Nico Willians"], ans: "Nico Willians " },
      { q: "Quem ganhou a Bola de Ouro 2023?", opts: ["Messi", "Haaland", "Mbappé"], ans: "Messi" },
      { q: "Onde foi a Copa 2014?", opts: ["Brasil", "África do Sul", "Rússia"], ans: "Brasil" },
      { q: "Qual país venceu a Copa 1998?", opts: ["Brasil", "França", "Alemanha"], ans: "França" },
      { q: "Quem desses já fez um Hat-trick em final de copa?", opts: ["Messi", "Pelé", "Mbappe"], ans: "Mbappe" },
      { q: "Qual foi o último campeão de champions league?", opts: ["Real madri", "Psg", "Manchester City"], ans: "Psg" },
      { q: "Maior artilheiro da eliminatorias da copa do mundo?", opts: ["Messi", "Cristiano ronaldo", "Neymar"], ans: "Cristiano Ronaldo" },
      { q: "Quais desses tem mais titulo brasileiro?", opts: ["Palmeiras", "São paulo", "Flamengo"], ans: "Palmeiras" },
      { q: "Quem é o 'Fenômeno'?", opts: ["Cristiano Ronaldo", "Ronaldo Nazário", "Ronaldinho"], ans: "Ronaldo Nazário" },
      { q: "Qual time tem mais Libertadores?", opts: ["São Paulo", "Palmeiras", "Flamengo"], ans: "São Paulo" }, 
      { q: "Quem fez os gols da final 2002?", opts: ["Ronaldinho", "Rivaldo", "Ronaldo Fenômeno"], ans: "Ronaldo Fenômeno" }
      
    ];

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // troca os elementos
      }
    }
    
    // Embaralha o quiz
    shuffleArray(quiz);
    
  
    let current = 0; /*Informa qual pergunta estamos*/
    let score = 0; /*Quantas acertou*/
    let time = 12; /*Time*/
    let timer; /*Contador*/
  
    function loadQuestion() {
      if (current >= quiz.length) {
        endQuiz();
        return;
      }
  
      $("#question").text(quiz[current].q);
      $("#options").empty(); /*Limpa a pergunta anterior*/
  
      quiz[current].opts.forEach(opt => {
        const btn = $("<button>").text(opt);
        btn.click(() => checkAnswer(opt)); /*Cria um evento de clique*/
        $("#options").append(btn); /*Insere o botão de clique em options*/
      });
  
      time = 12;
      $("#timer").text(time);
      clearInterval(timer);
      timer = setInterval(updateTimer, 1000);
    }
  
    function updateTimer() {
      time--;
      $("#timer").text(time);
      if (time <= 0) {
        clearInterval(timer);
        current++; /*Passa pra próxima pergunta*/
        loadQuestion();
      }
    }
  
    function checkAnswer(choice) { /*Resposta selecioanda*/
      if (choice === quiz[current].ans) score++;
      current++;
      clearInterval(timer);
      loadQuestion();
    }
    function endQuiz() {
      $("#question").text("🏆 Fim do Quiz!");
      $("#options").empty();
      $(".timer").hide();
      $("#result").text(`Você acertou ${score} de ${quiz.length} perguntas!`);
    
      // Mostrar botão de reinício
      $("#restart-btn").show();
    }
    
    // Evento de clique no botão de reinício
    $("#restart-btn").click(function() {
      current = 0;
      score = 0;
      $("#score").text(score);
      $("#result").text("");
      $("#restart-btn").hide();
      $(".timer").show();
      shuffleArray(quiz); // embaralha as perguntas novamente

    });

    loadQuestion(); // chama a primeira pergunta ao carregar a página

    
  });