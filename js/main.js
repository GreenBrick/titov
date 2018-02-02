$(document).ready(function(){

	$('.start').click(function(){
        $('.bottom__car').animate({'left':'3000'}, 5000, function(){
	        $('.end').html('<p>Вот теперь точно, конец...</p>');
	    });
    });

});