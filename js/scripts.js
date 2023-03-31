function mostraDica()
{
    document.getElementById("dicaTexto").style.display = "inline";
}
function escondeDica()
{
    document.getElementById("dicaTexto").style.display = "none";
}
function validaSenha()
{
    var campoSenha = document.getElementById("txtSenha");
    var valorSenha = campoSenha.value;
    if(valorSenha.length < 6)
    {
        alert("Senha precisa ter ao menos 6 caracteres");
        return false;
    }
    else
    {
        return true;
    }
}

function recebeUsuario() {
  let usuario = document.getElementById('txtLogin').value;
  window.location.href = "index.html"
  localStorage.setItem('valueUser', usuario);
}

function pegaUsuario(){
  var usuarioShow = localStorage.getItem('valueUser');
  document.getElementById('userName').innerHTML = usuarioShow;

  if(usuarioShow == null){
    document.getElementById('userName').innerHTML = "Faça seu login!";  
  }
}

document.getElementById("dicaTexto").style.display = "none";

var elSenha = document.getElementById("txtSenha");
elSenha.onblur = validaSenha;

var elIcone = document.getElementById("imgIcone");
elIcone.onmouseover = mostraDica;
elIcone.onmouseout = escondeDica;

var elSenha = document.getElementById("txtSenha");
elSenha.addEventListener("blur", validaSenha);

function SliderShow(){
  var counter = 1;
  setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
      counter = 1;
    }
  }, 2500);
}
