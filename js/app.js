$(document).ready(function() {

 	$( function() {
   		$( "#sortable").sortable();
    	$( "#sortable").disableSelection();
 	});


	$("#addItem").on('touchstart click', function() {
		var newItem = $('input[name=textField]').val();
			if (newItem.length > 0) {
			$('ul').append('<li><div class="row todoItem">' + '<div class="hidden-xs col-sm-1"><img src="img/move.png" class="move"></div>' + '<div class="col-xs-10 col-sm-9">' + newItem + '</div>' + '<div class="col-xs-1"><img src="img/delete.png" class="trash"></div>' + '</li></div>'); 
			$('#textField').val("");
			$('li .trash').on('touchstart click', function() {
				$(this).parent().parent().parent().fadeOut(300);
			});
		}
	});


//keeps from resetting list after add (since using img input type)

	$("#addItem").click(function(event){
    event.preventDefault();
	}); 

});
