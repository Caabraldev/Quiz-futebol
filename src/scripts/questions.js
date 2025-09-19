$(document).ready(function () {
    
    const Quiz = [
        { q: "Qual seleção ganhou a Copa de 2002?", opts: ["Brasil", "Alemanha", "França"], ans: "Brasil" },
        { q: "Onde foi a Copa 2014?", opts: ["Brasil", "África do Sul", "Rússia"], ans: "Brasil" },
        { q: "Qual clube é conhecido como 'Reds'?", opts: ["Chelsea", "Liverpool", "Arsenal"], ans: "Liverpool" },
        { q: "Quantas Copas o Brasil tem?", opts: ["4", "5", "6"], ans: "5" },
        { q: "Quem é o 'Fenômeno'?", opts: ["Cristiano Ronaldo", "Ronaldo Nazário", "Ronaldinho"], ans: "Ronaldo Nazário" },
        { q: "Qual seleção tem mais Copas?", opts: ["Brasil", "Alemanha", "Itália"], ans: "Brasil" },
        { q: "Qual clube brasileiro é conhecido como 'Mengão'?", opts: ["Fluminense", "Flamengo", "Vasco"], ans: "Flamengo" },
        { q: "Qual é o apelido do Santos?", opts: ["Peixe", "Galo", "Timão"], ans: "Peixe" },
        { q: "Quem ganhou a Copa de 1998?", opts: ["Brasil", "França", "Alemanha"], ans: "França" },
        { q: "Quem marcou os gols da final de 2002?", opts: ["Ronaldinho", "Rivaldo", "Ronaldo Fenômeno"], ans: "Ronaldo Fenômeno" },
        { q: "Quem venceu a Copa América 2019?", opts: ["Brasil", "Argentina", "Chile"], ans: "Brasil" },
        { q: "Qual time é conhecido como 'Timão'?", opts: ["Corinthians", "Palmeiras", "Santos"], ans: "Corinthians" },
        { q: "Maior artilheiro da Copa de 2006?", opts: ["Klose", "Ronaldo", "Messi"], ans: "Klose" },
        { q: "Qual time tem mais títulos brasileiros?", opts: ["Palmeiras", "São Paulo", "Flamengo"], ans: "Palmeiras" },
        { q: "Quem é conhecido como 'O Mágico'?", opts: ["Ronaldinho", "Messi", "Neymar"], ans: "Ronaldinho" },
        { q: "Qual seleção venceu a Copa 2018?", opts: ["França", "Croácia", "Brasil"], ans: "França" },
        { q: "Quem é o maior artilheiro da história do Brasileirão?", opts: ["Roberto Dinamite", "Pelé", "Zico"], ans: "Roberto Dinamite" },
        { q: "Qual clube é conhecido como 'Galo'?", opts: ["Atlético-MG", "Cruzeiro", "Flamengo"], ans: "Atlético-MG" },
        { q: "Qual jogador nunca jogou no Barcelona?", opts: ["Coutinho", "Eto'o", "Nico Williams"], ans: "Nico Williams" },
        { q: "Qual seleção venceu a Copa de 1958?", opts: ["Brasil", "Suécia", "Alemanha"], ans: "Brasil" },
        { q: "Quantas Champions o Barcelona tem?", opts: ["4", "5", "6"], ans: "5" },
        { q: "Quem ganhou a Bola de Ouro 2023?", opts: ["Messi", "Haaland", "Mbappé"], ans: "Messi" },
        { q: "Maior artilheiro da Champions League?", opts: ["Cristiano Ronaldo", "Messi", "Benzema"], ans: "Cristiano Ronaldo" },
        { q: "Qual time tem mais Libertadores?", opts: ["São Paulo", "Palmeiras", "Flamengo"], ans: "São Paulo" },
        { q: "Quem foi campeão da Copa América 2021?", opts: ["Brasil", "Argentina", "Uruguai"], ans: "Argentina" },
        { q: "Qual seleção sediou a Copa de 2010?", opts: ["África do Sul", "Alemanha", "Japão"], ans: "África do Sul" },
        { q: "Qual clube tem o apelido 'Blaugrana'?", opts: ["Real Madrid", "Barcelona", "Valencia"], ans: "Barcelona" },
        { q: "Quem marcou o gol da final da Copa 2014?", opts: ["Neymar", "Mario Götze", "James Rodríguez"], ans: "Mario Götze" },
        { q: "Quem ganhou a Champions League 2023?", opts: ["Real Madrid", "Man City", "PSG"], ans: "PSG" },
        { q: "Qual jogador é chamado de 'La Pulga'?", opts: ["Messi", "Maradona", "Di María"], ans: "Messi" },
        { q: "Quem venceu a Copa América 2015?", opts: ["Chile", "Argentina", "Brasil"], ans: "Chile" },
        { q: "Qual foi o campeão da Euro 2016?", opts: ["Portugal", "França", "Alemanha"], ans: "Portugal" },
        { q: "Qual clube revelou Neymar?", opts: ["Santos", "Barcelona", "PSG"], ans: "Santos" },
        { q: "Qual jogador nunca jogou no Real Madrid?", opts: ["Benzema", "Cristiano Ronaldo", "Messi"], ans: "Messi" },
        { q: "Quem ganhou a Copa de 1994?", opts: ["Brasil", "Itália", "Alemanha"], ans: "Brasil" },
        { q: "Qual seleção venceu a Copa de 1930?", opts: ["Uruguai", "Argentina", "Brasil"], ans: "Uruguai" },
        { q: "Quem foi campeão da Copa do Mundo de 1986?", opts: ["Argentina", "Alemanha", "Brasil"], ans: "Argentina" },
        { q: "Quem é o maior artilheiro da Copa América?", opts: ["Messi", "Suárez", "Norberto Méndez"], ans: "Norberto Méndez" },
        { q: "Qual clube tem mais títulos na Premier League?", opts: ["Manchester United", "Chelsea", "Arsenal"], ans: "Manchester United" },
        { q: "Qual time tem mais títulos da Copa do Brasil?", opts: ["Cruzeiro", "Palmeiras", "Flamengo"], ans: "Cruzeiro" },
        { q: "Quem marcou o gol da final da Champions 2012 pelo Chelsea?", opts: ["Drogba", "Lampard", "Torres"], ans: "Drogba" },
        { q: "Qual seleção foi campeã da Euro 2004?", opts: ["Portugal", "Grécia", "França"], ans: "Grécia" },
        { q: "Qual foi o artilheiro da Copa 2006?", opts: ["Klose", "Henry", "Ronaldinho"], ans: "Klose" },
        { q: "Quem marcou 5 gols em um jogo de Champions pelo Barcelona?", opts: ["Messi", "Suárez", "Neymar"], ans: "Messi" },
        { q: "Qual técnico levou o Porto à Champions 2004?", opts: ["Mourinho", "Benítez", "Del Bosque"], ans: "Mourinho" },
        { q: "Quem foi o capitão da França em 1998?", opts: ["Deschamps", "Zidane", "Blanc"], ans: "Deschamps" },
        { q: "Qual país foi vice da Copa 1950 no Brasil?", opts: ["Argentina", "Uruguai", "Suécia"], ans: "Uruguai" },
        { q: "Em que clube Zidane encerrou a carreira?", opts: ["Juventus", "Real Madrid", "Bordeaux"], ans: "Real Madrid" },
        { q: "Qual seleção ganhou a Copa de 2002?", opts: ["Brasil", "Alemanha", "França"], ans: "Brasil" },
        { q: "Qual time é conhecido como 'Furacão'?", opts: ["Athletico-PR", "Internacional", "Bahia"], ans: "Athletico-PR" },
        { q: "Qual time é chamado de 'Peixe'?", opts: ["Santos", "Botafogo", "Vasco"], ans: "Santos" },
        { q: "Qual time paulista é chamado de 'Timão'?", opts: ["Corinthians", "São Paulo", "Santos"], ans: "Corinthians" },
        { q: "Qual clube carioca é chamado de 'Mengão'?", opts: ["Flamengo", "Vasco", "Botafogo"], ans: "Flamengo" },
        { q: "Quantas Copas do Mundo o Brasil conquistou?", opts: ["4", "5", "6"], ans: "5" },
        { q: "Qual time gaúcho é chamado de 'Tricolor Gaúcho'?", opts: ["Grêmio", "Internacional", "Juventude"], ans: "Grêmio" },
        { q: "Quem marcou o gol do título da Copa de 2002?", opts: ["Ronaldo", "Rivaldo", "Ronaldinho"], ans: "Ronaldo" },
        { q: "Qual time paulista tem como mascote um peixe?", opts: ["Santos", "São Paulo", "Palmeiras"], ans: "Santos" },
        { q: "Qual time carioca é conhecido como 'Fogão'?", opts: ["Botafogo", "Flamengo", "Fluminense"], ans: "Botafogo" },
        { q: "Quem é o maior artilheiro da história do Campeonato Brasileiro?", opts: ["Roberto Dinamite", "Romário", "Pelé"], ans: "Roberto Dinamite" },
        { q: "Qual clube do RS tem cores vermelho e branco?", opts: ["Internacional", "Grêmio", "São José"], ans: "Internacional" },
        { q: "Quem foi o camisa 10 do Brasil na Copa de 1970?", opts: ["Pelé", "Rivelino", "Jairzinho"], ans: "Pelé" },
        { q: "Qual time paulista é chamado de 'Alviverde'?", opts: ["Palmeiras", "São Paulo", "Santos"], ans: "Palmeiras" },
        { q: "Quem foi o técnico do Brasil no tetra em 1994?", opts: ["Parreira", "Felipão", "Zagallo"], ans: "Parreira" },
        { q: "Qual clube carioca é chamado de 'Tricolor das Laranjeiras'?", opts: ["Fluminense", "Flamengo", "Vasco"], ans: "Fluminense" },
        { q: "Qual time gaúcho venceu a Copa Libertadores em 2017?", opts: ["Grêmio", "Internacional", "Juventude"], ans: "Grêmio" },
        { q: "Qual time paulista venceu a Copa Libertadores em 2012?", opts: ["Corinthians", "São Paulo", "Santos"], ans: "Corinthians" },
        { q: "Qual clube paulista conquistou o Mundial de Clubes da FIFA em 2005?", opts: ["São Paulo", "Palmeiras", "Santos"], ans: "São Paulo" },
        { q: "Quem é maior rival do São Paulo?", opts: ["Corinthians", "Palmeiras", "Santos"], ans: "Corinthians" },
        { q: "Qual clube carioca venceu a Libertadores em 2019?", opts: ["Flamengo", "Vasco", "Botafogo"], ans: "Flamengo" },
        { q: "Qual jogador brasileiro é conhecido como 'O Fenômeno'?", opts: ["Romário", "Ronaldo", "Adriano"], ans: "Ronaldo" },
        { q: "Qual time do RS tem o maior estádio?", opts: ["Grêmio", "Internacional", "Caxias"], ans: "Grêmio" },
        { q: "Qual clube gaúcho é apelidado de 'Imortal Tricolor'?", opts: ["Grêmio", "Internacional", "Brasil de Pelotas"], ans: "Grêmio" },
        { q: "Quem é conhecido como 'Rei do Drible'?", opts: ["Garrincha", "Pelé", "Ronaldinho Gaúcho"], ans: "Garrincha" },
        { q: "Qual time carioca tem cores verde, branco e grená?", opts: ["Fluminense", "Vasco", "Botafogo"], ans: "Fluminense" },
        { q: "Qual time paulista venceu a Copa Libertadores em 2005, 2006 e 2007?", opts: ["São Paulo", "Santos", "Palmeiras"], ans: "São Paulo" },
        { q: "Quem marcou o 'gol do título' do Brasil na Copa América 2019?", opts: ["Gabriel Jesus", "Everton Cebolinha", "Firmino"], ans: "Gabriel Jesus" },
        { q: "Qual time paulista tem cores verde e branco?", opts: ["Palmeiras", "Santos", "São Paulo"], ans: "Palmeiras" },
        { q: "Quem foi o capitão do Brasil no tetra em 1994?", opts: ["Dunga", "Mauro Silva", "Cafu"], ans: "Dunga" },
        { q: "Qual clube revelou Lewandowski?", opts: ["Borussia Dortmund", "Lech Poznań", "Bayern"], ans: "Lech Poznań" },
        { q: "Quem marcou hat-trick na final da Copa do Mundo?", opts: ["Pelé", "Mbappe", "Messi"], ans: "Mbappe" },
        { q: "Qual clube carioca é chamado de 'Mengão'?", opts: ["Flamengo", "Vasco", "Botafogo"], ans: "Flamengo" },
        { q: "Qual time do Rio é conhecido como 'Alvinegro'?", opts: ["Botafogo", "Flamengo", "Vasco"], ans: "Botafogo" },
        { q: "Quem é maior rival do Vasco?", opts: ["Flamengo", "Botafogo", "Fluminense"], ans: "Flamengo" },
        { q: "Qual clube carioca é chamado de 'Tricolor das Laranjeiras'?", opts: ["Fluminense", "Flamengo", "Vasco"], ans: "Fluminense" },
        { q: "Qual time do Rio conquistou a Libertadores em 2019?", opts: ["Flamengo", "Vasco", "Botafogo"], ans: "Flamengo" },
        { q: "Qual clube carioca tem o mascote de um vasco da gama?", opts: ["Vasco", "Botafogo", "Fluminense"], ans: "Vasco" },
        { q: "Qual time carioca é chamado de 'Fogão'?", opts: ["Botafogo", "Flamengo", "Fluminense"], ans: "Botafogo" },
        { q: "Quem é maior rival do Fluminense?", opts: ["Flamengo", "Botafogo", "Vasco"], ans: "Flamengo" },
        { q: "Qual clube do Rio de Janeiro tem cores verde, branco e grená?", opts: ["Fluminense", "Vasco", "Botafogo"], ans: "Fluminense" },
        { q: "Qual time do Rio venceu a Copa do Brasil em 2011?", opts: ["Vasco", "Flamengo", "Botafogo"], ans: "Vasco" },
        { q: "Qual foi o artilheiro da Champions 2023?", opts: ["Haaland", "Messi", "Ronaldo"], ans: "Haaland" },
        { q: "Quem venceu a Copa do Mundo de 1970?", opts: ["Brasil", "Alemanha", "Itália"], ans: "Brasil" },
        { q: "Quem ganhou a Copa do Mundo de 1966?", opts: ["Inglaterra", "Brasil", "Alemanha"], ans: "Inglaterra" },
        { q: "Quem venceu a Copa do Mundo de 1982?", opts: ["Itália", "Brasil", "Alemanha"], ans: "Itália" },
        { q: "Qual time gaúcho é chamado de 'Colorado'?", opts: ["Internacional", "Grêmio", "Juventude"], ans: "Internacional" },
        { q: "Qual clube é conhecido como 'Tricolor Gaúcho'?", opts: ["Grêmio", "Internacional", "São José"], ans: "Grêmio" },
        { q: "Quem venceu a Copa Libertadores de 2017 no RS?", opts: ["Grêmio", "Internacional", "Juventude"], ans: "Grêmio" },
        { q: "Qual time gaúcho tem o maior estádio do RS?", opts: ["Internacional", "Grêmio", "Caxias"], ans: "Grêmio" },
        { q: "Qual time gaúcho venceu a Copa do Brasil em 1992?", opts: ["Grêmio", "Internacional", "Juventude"], ans: "Grêmio" },
        { q: "Qual clube do RS tem como cores vermelho e branco?", opts: ["Internacional", "Grêmio", "São José"], ans: "Internacional" },
        { q: "Qual time gaúcho é apelidado de 'Imortal Tricolor'?", opts: ["Grêmio", "Internacional", "Brasil de Pelotas"], ans: "Grêmio" },
        { q: "Quem é maior rival do Internacional?", opts: ["Grêmio", "Juventude", "Caxias"], ans: "Grêmio" },
        { q: "Em que ano o Internacional conquistou a Libertadores pela primeira vez?", opts: ["2006", "2010", "1980"], ans: "2006" },
        { q: "Qual time gaúcho é conhecido como 'Juventude'?", opts: ["Juventude", "São José", "Pelotas"], ans: "Juventude" },
        { q: "Qual clube carioca é chamado de 'Mengão'?", opts: ["Flamengo", "Vasco", "Botafogo"], ans: "Flamengo" },
        { q: "Quem foi campeão da Copa Libertadores 2005?", opts: ["São Paulo", "Boca Juniors", "River Plate"], ans: "São Paulo" },
    ];

    // --- Funções utilitárias ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function pickRandomQuestions(quiz, n = 15) {
        shuffleArray(quiz);
        return quiz.slice(0, n);
    }

    // Pega 15 perguntas aleatórias
    let questions = pickRandomQuestions(Quiz, 15);

    let current = 0;
    let score = 0;
    let timer;
    let time = 12;

    function loadQuestion() {
        if (current >= questions.length) {
            endQuiz();
            return;
        }
    
        const question = questions[current];
    
        // Mostra contador de perguntas
        $("#question").text(`Pergunta ${current + 1} de ${questions.length}: ${question.q}`);
        $("#options").empty();
    
        question.opts.forEach(opt => {
            const btn = $("<button>").text(opt);
            btn.click(() => checkAnswer(opt));
            $("#options").append(btn);
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
            current++;
            loadQuestion();
        }
    }

    function checkAnswer(choice) {
        const question = questions[current];
        if (choice === question.ans) score++;
        current++;
        clearInterval(timer);
        loadQuestion();
    }

    function endQuiz() {
        clearInterval(timer);
        $("#options").empty();
        $(".timer").hide();
        $("#question").text("🏁 Fim do Quiz!");
        $("#result").text(`Você acertou ${score} de ${questions.length} perguntas.`);
        $("#restart-btn").show();
    }

    $("#restart-btn").click(function() {
        current = 0;
        score = 0;
        $(".timer").show();
        $("#restart-btn").hide();
        $("#result").text("");
        questions = pickRandomQuestions(Quiz, 15);
        loadQuestion();
    });

    loadQuestion();
});
