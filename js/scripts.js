//SCRIPTS EM JQUERY

//abrindo o jQuery
/*fora das chaves, temos o javascript funcionando, mas 
 não o jquery*/
//SELETOR,EVENTO, CALLBACK, AÇÃO

//GOTO
$(function () {

    //FORM_SUBMIT
    $('.j_formsubmit').submit(function () {

	var dados = $(this).serialize();
	$('#j_someBotao').css('display', 'none');


	$.ajax({
	    url: "https://formspree.io/das.simoes@outlook.com",
	    data: dados,
	    type: 'POST',
	    dataType: 'JSON',

	    beforeSend: function () {
		$('.form_load').css('display', 'block');
	    },

	    success: function (data) {
		$('.article_contato .green-box').css('display', 'block');
		$('.form_load').css('display', 'none');
		setTimeout(function () {
		    $('.green-box').fadeOut();
		    $('#j_someBotao').css('display', 'block');
		}, 3000);
	    }

	});
	return false;
    });

    //FUNCTIONS

    //Função para debugar variáveis, passando por parâmetro uma variável a ser debugada;
    function consoleDebug(varToDebug) {
	console.clear();
	console.log(varToDebug);
    }

});