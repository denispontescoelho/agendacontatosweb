/**
 * Confrimação de exclusão de um contato
 * Author Dev @Denis_Pontes
 */
 
 function confirmar (idcon){
	
	let resposta = confirm("Confirma a exclusão deste contato ?")
	if(resposta === true){
		alert(idcon)
		window.location.href="delete?idcon=" + idcon
	}
}