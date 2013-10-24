// JavaScript Document
$('#addItem').on('pageinit', function(){
// Prepare your page structure
var newPage = $("<div data-role='page' id='page'><div data-role=header><a data-iconpos='left' data-icon='back' href='#' data-role='button' data-rel='back'>Back</a><h1>Client Page</h1></div><div data-role=content>Clients</div></div>");

// Append the new page into pageContainer
newPage.appendTo($.mobile.displayPage);

// Move to this page by ID '#page'
$.mobile.changePage('#page');
});	
		
$('#addItem').on('pageinit', function(){

		var myForm = $('#formId');
		    myForm.validate({
			invalidHandler: function(form, validator) {
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};