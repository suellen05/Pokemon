function Esconder(){
 // $("#resumo").toggle();
 //  $("#resume").show();
 // $("#resumo").hide();

 //$("#resumo").slidetoggle();
 // $("#resumo").slidetDown();
 // $("#resumo").slideUp();

 //$("#resumo").fadeToggle(1000);
 //$("#resumo").fadeIn();
 // $("#resumo").fadeOut();
}

	$(".swipebox").swipebox();
 


  function RetornarEndereco(){
    let cep=$("#cep").val();
    let url="https://viacep.com.br/ws/"+ cep +"/json";
    
    $.getJSON(url,function(dados){
      $("#endereco-completo").append(dados.logradouro + "<br>" + dados.localidade + " - " + dados.uf );
    });
  }
  document.querySelector("#BuscarCep").addEventListener("click",function(){

    RetornarEndereco();
  });
