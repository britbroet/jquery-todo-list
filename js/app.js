$(document).ready(function() {

 	$( function() {
   		$( "#sortable").sortable();
    	$( "#sortable").disableSelection();
 	});


	$("#addItem").click(function() {
		var newItem = $('input[name=textField]').val();
			if (newItem.length > 0) {
			$('ul').append('<li>' + '<img src="../img/move.png" class="move">' + newItem + '<img src="img/delete.png" class="trash">' + '</li>'); 
			$('#textField').val("");
			$('li .trash').click(function() {
				$(this).parent('li').fadeOut(300);
			});
		}
	});


//keeps from resetting list after add (since using img input type)

	$("#addItem").click(function(event){
    event.preventDefault();
	}); 

});
