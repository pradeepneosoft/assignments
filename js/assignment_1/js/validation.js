
/**
 * form validation
 * @return boolean return falseif condition fails 
 */
function validate() {

	var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
	var phone_no = document.getElementById('phone_no').value;
	var office_no = document.getElementById('office_no').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var c_password = document.getElementById('c_password').value;
	var pattern = new RegExp("^[0-9]{10}$");
	var about_you = document.getElementById('about_you').value;
	var month_element = document.getElementById("month");
	var month = month_element.options[month_element.selectedIndex].value;

	var day_element = document.getElementById("day");
	var day = day_element.options[day_element.selectedIndex].value;

	var year_element = document.getElementById("year");
	var year = year_element.options[year_element.selectedIndex].value;


	// var email_pattern=new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
	var email_pattern = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
	// var password_pattern =/^([a-zA-Z0-9 _-]+).{7,12}$/;
	// var password_pattern = new RegExp("^[a-zA-Z0-9].{8,12}$");


	if (firstname == "") {
		alert("Firstname cannot be empty");
		return false;
	} else if (lastname == "") {
		alert("Lastname Cannot be empty");
		return false;
	} else if (phone_no == "") {
		alert("Phone No Cannot be empty");
		return false;

	} else if ((phone_no != "") && (pattern.test(phone_no) == false)) {

		alert("Please Enter Valid 10 digit Mobile No.");

		return false;
	} else if (office_no == "") {
		alert("Office No Cannot be empty");
		return false;
	} else if (email == "") {
		alert("Email Cannot be empty");
		return false;
	} else if ((email != "") && (!email.match(email_pattern))) {
		alert("Please Enter valid Email Address.");
		return false;
	} else if (password == "") {
		alert("Password Cannot be empty");
		return false;
	} else if ((password != "") && (!/[a-zA-Z0-9]{8,12}$/.test(password))) {
		alert("Password Should be min 8 and max 12 Character And should be alphanumeric");
		return false;
	} else if (c_password == "") {
		alert("Confirm  Password Cannot be empty");
		return false;
	} else if ((c_password != "") && (c_password !== password)) {
		alert("Confirm  Password Do Not Match With Password");
		return false;
	} else if (month == 0 || day == 0 || year == 0) {
		alert("Please Select Month ,Day and Year,cannot be empty");
		return false;
	} else if (get_gender() == undefined) {
		alert("Please Select Gender");
		return false;

	} else if (get_interest() == undefined) {
		alert("Please Select Aleast 1 interest");
		return false;

	} else if (about_you == "") {
		alert("Please Tell Us Something About You!! Cannot be empty");
		return false;

	}


}

/**
 * age calculatio from selected day,month and year selected in dropdown 
 */
function age_calculate() {
	var age = document.getElementById("age");
	var month_element = document.getElementById("month");
	var month = month_element.options[month_element.selectedIndex].value;

	var day_element = document.getElementById("day");
	var day = day_element.options[day_element.selectedIndex].value;

	var year_element = document.getElementById("year");
	var year = year_element.options[year_element.selectedIndex].value;
	if (month != 0 && day != 0 && year != 0) {
		var date = month + " " + day + "," + year;
		var date1 = formatDate(date);
		age.value = getAge(date1);

	} else {
		age.value = 0;
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

/**
 * check whether gender radio button is checked or not 
 *
 * @return     string  checked.
 */
function get_gender() {
	var checked;
	var gender = document.getElementsByName('radio');
	for (var i = 0; i < gender.length; i++) {
		if (gender[i].checked) {
			checked = gender[i].value;
		}
	}
	// alert(checked);
	return checked;
}

/**
 * check whether interest checkbox is checked
 *
 * @return     string  interest_checked.
 */
function get_interest() {
	var interest_checked;
	var interest = document.getElementsByClassName('checkbox');
	for (var i = 0; i < interest.length; i++) {
		if (interest[i].checked) {
			interest_checked = interest[i].value;
		}
	}
	return interest_checked;
}