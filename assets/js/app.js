$(function(){
	$(".button-collapse").sideNav();
    $('.parallax').parallax();   
    $(".button-collapse").sideNav(); 
    $('.carousel').carousel();
    $('.slider').slider();

    var vids = $("video"); 
    $.each(vids, function(){
           this.controls = false; 
    }); 

	console.log("Waddup?!");
});


      