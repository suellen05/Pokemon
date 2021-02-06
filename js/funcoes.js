let pokemon =["p1.png","p2.png","p3.png","p4.png"];
let pokemonNome=["Psyduck" , "Charmander" , "Pikachu" , "Squirtle"];
let sorteio = Math.floor(Math.random() * pokemon.length);
document.querySelector(".pokemon-foto").src = "../imagens/"+ pokemon[sorteio];

function GerarBotoes(){
    let botao = "";
    for(let i=0; i<pokemon.length ; i++){
    botao += "<button onclick=\"Resolver('"+pokemonNome[i]+"');\">"+pokemonNome[i] + "</button>";

}

    document.querySelector("#botoes").innerHTML = botao;
}
function Resolver(nome){
    if(nome==pokemonNome[sorteio]){
        alert("Parabéns,você acertou");
    }else{
        alert("Que pena,tente de novo");
    }
    document.querySelector(".pokemon-foto").style="filter:brightness(1)";
    document.querySelector("#pokemon-nome").innerText =pokemonNome[sorteio];
}

function Ajuda(){
    let html =" ";
    let imagem =" ";
    for(let i=0; i<pokemon.length; i++){
        imagem = "<img src='imagens/"+pokemon[i] +"'>";
        html +="<span>"+imagem+"<br>"+ pokemonNome[i]+"</span>";
    }
    document.querySelector("#pokemon-ajuda").innerHTML = html;
}

