var audio = document.getElementById("myAudio"); 
var musicaAtual = 0;
var songs = document.querySelectorAll(".song");
// função para mostrar/ocultar o player de música
function toggleMusicPlayer(show) {
    var musicPlayer = document.getElementById("musicPlayer");  
    musicPlayer.classList.toggle("hidden", !show);       // adiciona ou remove a classe "hidden" para mostrar ou ocultar o player
    musicPlayer.style.bottom = show ? "0" : "-100px";     // define a posição do player na tela, mostrando ou o ocultando
  }
  
  // função para reproduzir/pausar música
  function togglePlayPause() {
    var icon = document.getElementById('play');
  
    if (audio.paused && icon.classList.contains('pause')) { // Verifica se o áudio está pausado e se o icone é o pause.
        audio.play();  //toca o áudio
        icon.classList.remove('play'); //remove o icone de play
        icon.classList.add('pause'); //adiciona o icone de pause

        return //retorna a função, ou seja, traz um retorno permitindo que o clique funcione várias vezes

    } else { // se o audio não esiver pausado ele toca direto
        audio.pause();  //pausa o áudio
        icon.classList.add('play') //adiciona o icone de play  
        return 
    }
    icon.classList.remove('pause'); //remove o icone de pause
    icon.classList.add('play'); //adiciona o icone de play

  }
  
function skip() {
  // avança a posição atual na lista de músicas
  musicaAtual++;

  // Verifica se alcançou o final da lista
  if (musicaAtual >= songs.length) {
      musicaAtual = 0;    // volta ao início da lista se alcançou o final
  }

  var src = songs[musicaAtual].getAttribute("data-src");
  var name = songs[musicaAtual].getAttribute("data-name");
  var artist = songs[musicaAtual].getAttribute("data-artist");
  var image = songs[musicaAtual].getAttribute("data-image");

  // reproduz a próxima música
  playMusic(src, name, artist, image);
}

// função para voltar para a música anterior na lista
function back() {
  // volta a posição atual na lista de músicas
  musicaAtual--;

  // verifica se está no início da lista
  if (musicaAtual < 0) {
      musicaAtual = songs.length - 1;       // volta para o final da lista se está no início
  }

  var src = songs[musicaAtual].getAttribute("data-src");
  var name = songs[musicaAtual].getAttribute("data-name");
  var artist = songs[musicaAtual].getAttribute("data-artist");
  var image = songs[musicaAtual].getAttribute("data-image");

  playMusic(src, name, artist, image);
}

  
  // função para reproduzir música e obter os elementos de áudio, nome do artista, nome da música e imagem do artista
  function playMusic(src, name, artist, image) {  
    var songName = document.getElementById("songName");
    var artistImage = document.getElementById("artistImage");
    var artistName = document.getElementById("artistName");
    var id = document.getElementById("musica1")
    // Define a fonte de áudio, o nome da música e a imagem do artista
    audio.src = src;
    artistName.textContent = artist; 
    songName.textContent = name;
    artistImage.src = image;
    
    // Mostra o player de música e inicia a reprodução da música
    toggleMusicPlayer(true);  
    audio.play();  
  }
  
  // quando um item de música é clicado
  document.querySelectorAll(".song").forEach(function(item) {
    item.addEventListener("click", function() { // obtém os atributos de dados do item clicado
        var src = this.getAttribute("data-src");
        var name = this.getAttribute("data-name");
        var artist = this.getAttribute("data-artist");
        var image = this.getAttribute("data-image");
  
        // reproduz a música com os dados obtidos
        playMusic(src, name, artist, image);      
    });
  });
  
  // quando o botão de reprodução/pausa é clicado
  document.getElementById("playPauseBtn").addEventListener("click", togglePlayPause);
  document.getElementById("skipBtn").addEventListener("click", skip);
  document.getElementById("backBtn").addEventListener("click", back);