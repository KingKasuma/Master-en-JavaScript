$(document).ready(function(){

	// Mover elemento por la pagina
	$('.elemento').draggable();

	// Redimencionar
	$('.elemento').resizable();

	// Seleccionar y ordenar elementos
	//$(".lista-seleccionable").selectable();
	$(".lista-seleccionable").sortable({
		update: function(event, ui){
			console.log("Ha cmabiado la lista");
		}
	});

	// Drop
	$("#elemento-movido").draggable();
	$("#area").droppable({
		drop: function(){
			console.log("has soltado algo dentro de el area");
		}
	});

	// Efectos
	$("#mostrar").click(function(){
		$(".caja-efectos").toggle("shake", 4000);
	});

	// Tooltip
	$(document).tooltip();

	// Dialog
	$("#lanzar-popup").click(function(){
		$("#popup").dialog();
	});

	// Datepicker
	$("#calendario").datepicker();

	// Tabs
	$("#pestanas").tabs();

});