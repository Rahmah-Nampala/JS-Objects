// Creating a Contacts addressbook object 

function Contact(first_name, second_name, phone_number, email, address_array) { // creating the constructor Contact
	this.first_name = first_name;
	this.second_name = second_name;
	this.phone_number = phone_number;
	this.email = email;
	this.address = {"str": address_array[0], "city": address_array[1], "country": address_array[2]} // making the address an object inside Contact
}
// address is an object that displays its information as an array
// the individual contacts display 
Contact.prototype.addFullName = function() { // a customised prototype to return: this.first_name + "," + this.second_name};
	return this.first_name + "," + this.second_name};

var contact1 = new Contact("Nampala", "Rahmah", 702427983, "rahma10na@gmail.com", ["Cream road, Nsambya", "Kampala", "Uganda"]);


contact1.addFullName();