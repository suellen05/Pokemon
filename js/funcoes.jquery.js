let pokemon = ["p1.png","p2.png","p3.png","p4.png"];
let pokemonNome =["Psyduck" , "Charmander" , "Pikachu" , "Squirtle"];
let sorteio = Math.floor(Math.random()* pokemon.length);
$(".pokemon-foto").attr("src","imagens/"+ pokemon[sorteio]);
function GerarBotoes(){
    let botao = "";
    $.each(pokemonNome, function(indice , valor){
        botao+= "<button onclick=\"Resolver('"+valor+"'); \">" + valor + "</button>"
    });
    $("#botoes").html(botao);

}

function Resolver(nome){
    if(nome== pokemonNome[sorteio]){
        alert("Parabéns");

    }else{
        alert("Errouuu");
    }
    $("#pokemon-nome").html(pokemonNome[sorteio]);
    $(".pokemon-foto").css("filter", "brightness(1)");
}

function Ajuda(){
    let html = "";
    let imagem = "";
    $.each(pokemon , function(indice , valor){
        imagem = "<img src='imagens/"+valor+"'>";
        html +="<span>"+ imagem + "<br>"+ pokemonNome[indice]+ "</span>";
    });
    $("#pokemon-ajuda").html(html);
}