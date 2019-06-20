// Creating a Contacts addressbook object
function Contact(first_name, second_name, phone_number, email, address) { // creating the constructor Contact
	this.first_name = first_name;
	this.second_name = second_name;
	this.phone_number = phone_number;
	this.email = email;
	this.address = address;
	function Address(street, city, country) { // making the address an object inside the Contact object
		this.street = street;
		this.city = city;
		this.country = country;
	}
}

var address1 = new Address("Cream road, Nsambya", "Kampala", "Uganda");
var address2 = new Address("Kibuli road, Kabalagala", "Kampala", "Uganda");

var contact1 = new Contact("Nampala", "Rahmah", 702427983, "rahma10na@gmail.com", address1);
var contact2 = new Contact("Asio", "Rebecca", 702457986, "masio@gmail.com", address2);

Contact.prototype.addfullName = function() { // String.prototype.fullName = function() {return this.first_name + "," + this.second_name};
	return this.first_name + "," + this.second_name};
