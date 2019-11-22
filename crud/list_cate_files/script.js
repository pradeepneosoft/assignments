// JavaScript Document
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

$('#list_cate_form').on('submit',function(event) {
console.log("submit called");

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
	alert("Please select checkbox to delete");
}

 

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
function delete_category(id){
	console.log("delete called");
var conf = confirm("Are you sure you want to delete category??all product under this category will be deleted??");
if(conf == true){
window.location = "api/delete.php?method=delete_cate&id="+id;
}
else
{
	return false;
}
}	


// $('#multi_check').on('change',function(){
// 	alert("ghfds");
// 	// if($(this).is(':checked'))
// 	// {
// 	// 	alert("check");
// 	// }
// 	// else
// 	// 	{
// 	// 	alert(" uncheked");
// 	// }
// })
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





// function delete_selected()
// { var all=[];
// 	// alert("called");
// 	var check_boxes= $('.check_box');
	

// 	for (var i = 0; i < check_boxes.length; i++) {
//       if($(check_boxes[i]).is(":checked"))
//       {
//        all.push($(check_boxes[i]).val());
// }
// }

// if(all.length<=0)
// {
// 	alert("PLease Select checkbox to delete");
// }
// else
// {
// 	delete_all(all);
// }

// }
// function delete_all(all){
// var conf = confirm("Are you sure you want to delete category??all product under these category will be deleted??");
// if(conf == true){
// window.location = "api/delete.php?method=delete_cate_all&ids="+all;
// }
// }
