//your JS code here. If required.
document.getElementById("submitbtn").addEventListener("click",function(){
	let name = document.getElementById("fname").value;
	let lastname = document.getElementById("lname").value;
	let number = document.getElementById("phno").value;
	let email = document.getElementById("email").value;

	alert(`First Name: ${name} Last Name: ${lastname} Phone Number: ${number} Email ID: ${email}`);

});