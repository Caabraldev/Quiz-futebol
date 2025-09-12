$(document).ready(function () {
    const quiz = [
      { q: "Qual seleção ganhou a Copa de 2002?", opts: ["Brasil", "Alemanha", "França"], ans: "Brasil" },
      { q: "Quem é o maior artilheiro da Champions League?", opts: ["Cristiano Ronaldo", "Messi", "Benzema"], ans: "Cristiano Ronaldo" },
      { q: "Qual clube é conhecido como 'Reds'?", opts: ["Chelsea", "Liverpool", "Arsenal"], ans: "Liverpool" },
      { q: "Quantas Copas o Brasil tem?", opts: ["4", "5", "6"], ans: "5" },
      { q: "Quem ganhou a Bola de Ouro 2023?", opts: ["Messi", "Haaland", "Mbappé"], ans: "Messi" },
      { q: "Onde foi a Copa 2014?", opts: ["Brasil", "África do Sul", "Rússia"], ans: "Brasil" },
      { q: "Qual país venceu a Copa 1998?", opts: ["França", "Brasil", "Alemanha"], ans: "França" },
      { q: "Quem é o 'Fenômeno'?", opts: ["Cristiano Ronaldo", "Ronaldo Nazário", "Ronaldinho"], ans: "Ronaldo Nazário" },
      { q: "Qual time tem mais Libertadores?", opts: ["São Paulo", "Palmeiras", "Flamengo"], ans: "São Paulo" },
      { q: "Quem fez os gols da final 2002?", opts: ["Ronaldinho", "Rivaldo", "Ronaldo Fenômeno"], ans: "Ronaldo Fenômeno" }
    ];
  
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
    } $("Restart").show
  
    loadQuestion(); /*Chama a 1 pergunta*/
  });
    $("#Restart").click()
    