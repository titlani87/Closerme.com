$(document).on("ready",main);

function main(){
	$("#menu a").on("click",irA);
	$(window).scroll(scrollMenu);
}

function irA(){
	var section = $(this).attr("href");
	$("body, html").animate({
		scrollTop: $(section).offset().top
	}, 800);

	return false;
}
function scrollMenu(){
	var secciones =[$("#inicio").offset().top,$("#quienes").offset().top,$("#servicios").offset().top,$("#eventos").offset().top,$("#contacto").offset().top, $("body").height()];

	if($(this).scrollTop() > secciones[0]){
		$("#menu li").eq(0).removeClass("active");
	}else{
		$("#menu li").eq(0).addClass("active");
	}
	if($(this).scrollTop() > secciones[1]-10 && $(this).scrollTop() < secciones[2]-10){
		$("#menu li").eq(1).addClass("active");
	}else{
		$("#menu li").eq(1).removeClass("active");
	}
	if($(this).scrollTop() > secciones[2]-10 && $(this).scrollTop() < secciones[3]-10){
		$("#menu li").eq(2).addClass("active");
	}else{
		$("#menu li").eq(2).removeClass("active");
	}
	if($(this).scrollTop() > secciones[3]-10 && $(this).scrollTop() < secciones[4]-10){
		$("#menu li").eq(3).addClass("active");
	}else{
		$("#menu li").eq(3).removeClass("active");
	}
	if($(this).scrollTop() > secciones[4]-10 && $(this).scrollTop() < secciones[5]-10){
		$("#menu li").eq(4).addClass("active");
	}else{
		$("#menu li").eq(4).removeClass("active");
	}
	

}