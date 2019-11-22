// JavaScript Document
var rout=window.location.hostname+"/pradeep/crud/";
jQuery(document).ready(function() {
		<!-- Js for Menu -->	
	
		jQuery(".toggle_menu a").click(function () {
			jQuery("#topMenu").slideToggle("fast");
			});	
			
		jQuery(".drop-button a").click(function () {
			jQuery(".show_dropdown").slideToggle("fast");
			});	
	/*<!-- Js for BXSLIDER -->
		$('.bxslider').bxSlider({
			captions: true,
			auto:true,
			controls:false,				
			pager: false,			
		});

		
		
		<!-- Grid Section -->
		$('.grid-scetion img').css('opacity', 0.7);
		// when hover over the selected image change the opacity to 1  
		$('.grid-scetion li').hover(  
			function(){  
			  $(this).find('img').stop().fadeTo('slow', 1.0);  
			},  
			function(){  
			  $(this).find('img').stop().fadeTo('fast', 0.7);  
		});  */

$('#list_prod_form').submit(function(event) {
var checked="";
 event.preventDefault();
 // alert("dsdasd"); 
 // checked=$('.check_box:checked').val();
  checked=$('.check_box').is(':checked');
if(checked==true)
{
var	conf=confirm("are you sure??");
if(conf==true)
{
	   $(this).unbind('submit').submit(); // continue the submit unbind preventDefault

}
}
else
{
	alert("PLease select checkbox to delete");
}

 //this will prevent the default submit

  // your code here (But not asynchronous code such as Ajax because it does not wait for response and move to next line.)

})





	/* Fixed Header */
	var lastScroll = 0;
    $(window).scroll(function(event) {
        //Sets the current scroll position
        var st = $(this).scrollTop();
        //Determines up-or-down scrolling
        if (st > lastScroll) {
            $("header").addClass("header_fixed");
    //$("header").css("transition", "background .3s");
        } else {
            //Replace this with your function call for upward-scrolling
            if ($(this).scrollTop() == 0) {

    $("header").removeClass("header_fixed");


            }
        }
        //Updates scroll position
        lastScroll = st;

    	});
	/* Fixed Header */

	/* Fixed Contact Number */   
	$(window).scroll(function(event){
		if($(window).scrollTop() == $(document).height() - $(window).height()){
			$(".fixed_contact_number").css("display","none");
		}else{
			$(".fixed_contact_number").css("display","block");
		}
	});		
	/* Fixed Header */

});	
function delete_product(id){
var conf = confirm("Are you sure you want to delete product");
if(conf == true){
window.location = "api/delete.php?method=delete_prod&id="+id;
}
}
function get_checked(element)
{
		if($(element).is(":checked"))
	{
	    $('.check_box').prop('checked','checked');
	}
	else
	{
	    $('.check_box').prop('checked',false);

	}


}

