$(document).ready(function(){

    jQuery.support.cors = true;

    $("#BtnEnviarEmail").click(function (){
        var nome = $("#TxtNome").val();
        var email = $("#TxtEmail").val();
        var telefone = $("#TxtTelefone").val();
        var mensagem = $("#TxtMensagem").val();
        var url = "...";

        var postData = { 
        "de" : email, 
        "nome" : nome, 
        "para" : "...", 
        "assunto" : "Contato pelo Site",
        "mensagem" : mensagem
        }

        console.log(postData);

        $.ajax({
            type: "POST",
            url: url,
            data: postData,
            beforeSend: function(xhr){
                xhr.setRequestHeader("Token", "...");
            },
            success: function(){
                alert("Mensagem enviada com sucesso! Nossa equipe entrará em contato com você em breve.");
            },
            error: function(data){
                alert("Houve uma falha ao tentar enviar a mensagem. Sinto muito!");
                console.log(data);
            },
            dataType: "jsonp"
          });

    });

});
