$(function(){
    
$(".error").css("color","red");

    // onsubmit: true,


     $("#form_id").validate({
        rules: {
            firstname: {
                required: true	
            },
            lastname: {
                required: true
            },
            phone: {
                required: true,
                rangelength: [10,10],
                digits: true

            },
            office:{
                 required: true,
                 digits: true
            },

            email: {
                required: true,
                email:true
            },
            password: {
                required: true,
                rangelength: [8, 12],
                alphanumeric:true,

            },
            c_password: {
                required:true,
                equalTo:"#password"
            },
            month: {
                required:true,
                require_month:true,
            },
            day: {
                required:true,
                require_day:true,
            },
            year: {
                required:true,
                require_year:true,

            },
             'gender[]':{
             required: true,
                minlength: 1
            },
           
            'interest[]':{
             required: true,
                
            },
           
            about_you: {
                required:true,
            }

        },
        messages: {
            firstname: {
                required: "Please enter Firstname"
            },
            lastname: {
                required: "Please enter Lastname"
            },
            phone: {
                required: "please enter phone No.",
                rangelength:"Enter 10 digit",
                digits:"Only take NO. input"
            },
            office:{
                required: "please enter office No.",
                digits:"Only take NO. input"
            },

            email: {
                required: "Please enter email",
                email:"please enter valid email"
            },
            password: {
                required: "Please enter password",
                rangelength:"should be between 8 to 12 character",
                alphanumeric:"only alphanumeric allowed"
            },
            c_password: {
                required: "Please enter valid confirm password",
                equalTo:"confirm password do not match with password"
            },
            month: {
                required: "Please Select Month",
                require_month:"please Select Month",
            },
            day: {
                required: "Please select Day",
                                require_day:"please Select day",

            },
            year: {
                required: "Please select year",
                                require_year:"please Select year",

            },
             'gender[]':{
             required: "Please Select Gender",
                minlength: "You must check at least 1"
            },
                          

            'interest[]':{
                 required: "Please check atleast 1 Interest",
               
            },
            about_you: {
             required:"please enter something about you",
            }

        },

       errorPlacement: function (error, element) {
    if (element.attr("type") == "checkbox") {
        error.insertAfter($(element).parents('ul'));
    } else {
        error.insertAfter($(element));// something else if it's not a checkbox
    }
},

   errorPlacement: function (error, element) {
    if (element.attr("type") == "radio") {
        error.insertAfter($(element).parents('ul:first'));
    } else {
        error.insertAfter($(element));// something else if it's not a checkbox
    }
}



    });
    });
     jQuery.validator.addMethod("alphanumeric", function(value, element) {
    return this.optional(element) || /[a-zA-Z0-9]+$/i.test(value);///[a-zA-Z0-9]{8,12}$/  /^[\w]+$/i 
}, "Letters, numbers only please");
    jQuery.validator.addMethod("require_month", function(value, element) {
    return this.optional(element) || value!="month";///[a-zA-Z0-9]{8,12}$/  /^[\w]+$/i 
}, "Select month Please");
    jQuery.validator.addMethod("require_day", function(value, element) {
    return this.optional(element) || value!="day";///[a-zA-Z0-9]{8,12}$/  /^[\w]+$/i 
}, "Select day Please");
    jQuery.validator.addMethod("require_year", function(value, element) {
    return this.optional(element) || value!="year";///[a-zA-Z0-9]{8,12}$/  /^[\w]+$/i 
}, "Select year please");
//     jQuery.validator.addMethod("get_selected", function(value, element) {
//     var boxes = $('.checkbox:selected');
//             if(boxes.length > 0)
//             {
//            return true;     
//             }
//     // return this.optional(element) || value!="year";
// }, "Letters, numbers only please");




/**
 * age calculatio from selected day,month and year selected in dropdown 
 */
function age_calculate() {

        var month=$('#month :selected').val();

   var day=$('#day :selected').val();

    var year =$('#year :selected').val();

    if (month != "month" && day != "day" && year != "year") {
        var date = month + " " + day + "," + year;
        var date1 = formatDate(date);
        $('#age').val(getAge(date1));

    }
}

/**
 * To get date in format yyyy/mm/dd 
 *
 * @param      String  date    The date
 * @return     String   to return date string in yyyy/mm/dd format
 */
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('/');
}

/**
 * to calculate age 
 *
 * @param      string                dateString  The date string
 * @return     string   age.
 */
function getAge(dateString) {
    var today = new Date();
    var DOB = new Date(dateString);
    var totalMonths = (today.getFullYear() - DOB.getFullYear()) * 12 + today.getMonth() - DOB.getMonth();
    totalMonths += today.getDay() < DOB.getDay() ? -1 : 0;
    var years = today.getFullYear() - DOB.getFullYear();
    if (DOB.getMonth() > today.getMonth())
        years = years - 1;
    else if (DOB.getMonth() === today.getMonth())
        if (DOB.getDate() > today.getDate())
            years = years - 1;

    var days;
    var months;

    if (DOB.getDate() > today.getDate()) {
        months = (totalMonths % 12);
        if (months == 0)
            months = 11;
        var x = today.getMonth();
        switch (x) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                {
                    var a = DOB.getDate() - today.getDate();
                    days = 31 - a;
                    break;
                }
            default:
                {
                    var a = DOB.getDate() - today.getDate();
                    days = 30 - a;
                    break;
                }
        }

    } else {
        days = today.getDate() - DOB.getDate();
        if (DOB.getMonth() === today.getMonth())
            months = (totalMonths % 12);
        else
            months = (totalMonths % 12) + 1;
    }
    var age = years + "." + months;
    return age;
}

