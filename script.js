const input = document.querySelector(".entradadotexto");
const saidadotexto = document.querySelector(".saidadotexto");
const botao_criptografar = document.querySelector(".b_criptografar")
const botao_descriptografar = document.querySelector(".b_descriptografar")
const botao_copiar = document.querySelector(".b_copiar")


function btnCriptografar(){
  const textoCriptografado = criptografa(input.value);
  saidadotexto.value = textoCriptografado;
  input.value = "";
}

function criptografa(stringEncriptada){
  let matrizCodigo = [["e" , "enter"], ["i", "imes"], ["a", "ai"], ["o" , "ober"] , ["u" , "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();
  
  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  
  return stringEncriptada
  
}

function btnDescriptografar(){
  const textoCriptografaodo = descriptografa(input.value);
  saidadotexto.value = textoCriptografaodo;
  input.value = "";
}

function descriptografa(stringEncriptada){
  let matrizCodigo = [["e" , "enter"], ["i", "imes"], ["a", "ai"], ["o" , "ober"] , ["u" , "ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();
  
  for(let i = 0; i < matrizCodigo.length; i++) {
    if(stringEncriptada.includes(matrizCodigo[i][1])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  
  return stringEncriptada
  
}

function btnCopiar(){
  saidadotexto.select();
  document.execCommand("copy");
  
}

function apagaContainer() {
      document.getElementById("container2").style.visibility = "hidden";
    }

botao_criptografar.addEventListener("click", btnCriptografar);

botao_descriptografar.addEventListener("click", btnDescriptografar);
botao_copiar.addEventListener("click", btnCopiar);