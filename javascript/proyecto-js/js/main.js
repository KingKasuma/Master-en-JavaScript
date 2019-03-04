$(document).ready(function(){

	// Slider	
	if(window.location.href.indexOf('index') > -1){
	  $('.bxslider').bxSlider({
	    mode: 'fade',
	    captions: true,
	    slideWidth: 1200,
	    responsive: true,
	    pager: true
	  });
	}
	// Posts
	if(window.location.href.indexOf('index') > -1){
	var posts = [
		{
			title: 'Prueba de titulo 1',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") +  " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae diam risus. Vestibulum lacinia rhoncus arcu, sit amet accumsan velit facilisis posuere. Duis ornare efficitur massa, nec iaculis turpis viverra at. Sed fringilla metus nec nisl condimentum, vel pellentesque elit blandit. Etiam ornare metus a posuere commodo. Suspendisse quis urna at arcu varius sagittis vitae ac lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent sollicitudin tortor lectus, non finibus felis porttitor sit amet. Ut at odio sapien. Praesent porttitor, felis volutpat tempus faucibus, nisl magna eleifend ligula, ac sagittis dui justo ac est. Nunc scelerisque dictum vestibulum. Sed vestibulum at eros sit amet tincidunt. '
		},
		{
			title: 'Prueba de titulo 2',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") +  " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae diam risus. Vestibulum lacinia rhoncus arcu, sit amet accumsan velit facilisis posuere. Duis ornare efficitur massa, nec iaculis turpis viverra at. Sed fringilla metus nec nisl condimentum, vel pellentesque elit blandit. Etiam ornare metus a posuere commodo. Suspendisse quis urna at arcu varius sagittis vitae ac lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent sollicitudin tortor lectus, non finibus felis porttitor sit amet. Ut at odio sapien. Praesent porttitor, felis volutpat tempus faucibus, nisl magna eleifend ligula, ac sagittis dui justo ac est. Nunc scelerisque dictum vestibulum. Sed vestibulum at eros sit amet tincidunt. '
		},
		{
			title: 'Prueba de titulo 3',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") +  " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae diam risus. Vestibulum lacinia rhoncus arcu, sit amet accumsan velit facilisis posuere. Duis ornare efficitur massa, nec iaculis turpis viverra at. Sed fringilla metus nec nisl condimentum, vel pellentesque elit blandit. Etiam ornare metus a posuere commodo. Suspendisse quis urna at arcu varius sagittis vitae ac lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent sollicitudin tortor lectus, non finibus felis porttitor sit amet. Ut at odio sapien. Praesent porttitor, felis volutpat tempus faucibus, nisl magna eleifend ligula, ac sagittis dui justo ac est. Nunc scelerisque dictum vestibulum. Sed vestibulum at eros sit amet tincidunt. '
		},
		{
			title: 'Prueba de titulo 4',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") +  " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae diam risus. Vestibulum lacinia rhoncus arcu, sit amet accumsan velit facilisis posuere. Duis ornare efficitur massa, nec iaculis turpis viverra at. Sed fringilla metus nec nisl condimentum, vel pellentesque elit blandit. Etiam ornare metus a posuere commodo. Suspendisse quis urna at arcu varius sagittis vitae ac lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent sollicitudin tortor lectus, non finibus felis porttitor sit amet. Ut at odio sapien. Praesent porttitor, felis volutpat tempus faucibus, nisl magna eleifend ligula, ac sagittis dui justo ac est. Nunc scelerisque dictum vestibulum. Sed vestibulum at eros sit amet tincidunt. '
		},
		{
			title: 'Prueba de titulo 5',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") +  " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae diam risus. Vestibulum lacinia rhoncus arcu, sit amet accumsan velit facilisis posuere. Duis ornare efficitur massa, nec iaculis turpis viverra at. Sed fringilla metus nec nisl condimentum, vel pellentesque elit blandit. Etiam ornare metus a posuere commodo. Suspendisse quis urna at arcu varius sagittis vitae ac lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent sollicitudin tortor lectus, non finibus felis porttitor sit amet. Ut at odio sapien. Praesent porttitor, felis volutpat tempus faucibus, nisl magna eleifend ligula, ac sagittis dui justo ac est. Nunc scelerisque dictum vestibulum. Sed vestibulum at eros sit amet tincidunt. '
		},
		{
			title: 'Prueba de titulo 6',
			date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") +  " del " + moment().format("YYYY"),
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae diam risus. Vestibulum lacinia rhoncus arcu, sit amet accumsan velit facilisis posuere. Duis ornare efficitur massa, nec iaculis turpis viverra at. Sed fringilla metus nec nisl condimentum, vel pellentesque elit blandit. Etiam ornare metus a posuere commodo. Suspendisse quis urna at arcu varius sagittis vitae ac lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent sollicitudin tortor lectus, non finibus felis porttitor sit amet. Ut at odio sapien. Praesent porttitor, felis volutpat tempus faucibus, nisl magna eleifend ligula, ac sagittis dui justo ac est. Nunc scelerisque dictum vestibulum. Sed vestibulum at eros sit amet tincidunt. '
		}
	];

	posts.forEach((item, index) => {
		var post = 	`
			<article class="post">
				<h2>${item.title}</h2>
				<span class="date">${item.date}</span>
				<p>
					${item.content}
				</p>
				<a href="#" class="button-more">Leer mas</a>
			</article>			
		`;		

		$("#posts").append(post);
	});
	}

	// Selecto de tema
	var theme = $("#theme");
	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});

	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	// Scroll arriba de la web
	$('.subir').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

	// Login falso
	$("#login form").submit(function(){
		var form_name = $("#form_name").val();
		localStorage.setItem("form_name", form_name);
	});

	var form_name = localStorage.getItem("form_name");
	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");
		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
		about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();			
		});
	}	

	// Acordeon
	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}

	// Reloj
	if(window.location.href.indexOf('reloj') > -1){
		setInterval(function(){
			var reloj = moment().format("hh:mm:ss");		
			$("#reloj").html(reloj);
		}, 1000);
	}

	// VAlidacion
	if(window.location.href.indexOf('contact') > -1){

		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
			lang: 'es',
			errorMessagePosition: 'top',
			scrollToTopOnError: true
		});
	}

});