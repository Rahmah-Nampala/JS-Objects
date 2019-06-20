function AddressBook() {
	this.contacts = []
}
AddressBook.prototype.addContact = function(contact) {
	this.contacts.push(contact)
}
function Contact(first_name, second_name, phone_number, email, address) {
	this.first_name = first_name;
	this.second_name = second_name;
	this.phone_number = phone_number;
	this.email = email;
	this.address = address;
}

function Address(street, city, country) {
		this.street = street;
		this.city = city;
		this.country = country;
	}
var address1 = new Address("Cream road, Nsambya", "Kampala", "Uganda");
var address2 = new Address("Kibuli road, Kabalagala", "Kampala", "Uganda");

Contact.prototype.fullName = function() { 
	return this.first_name + "," + this.second_name};
	
var addressBook = new AddressBook();
var contact1 = new Contact("Nampala", "Rahmah", 702427983, "rahma10na@gmail.com", contact1);
var contact2 = new Contact("Asio", "Rebecca", 702457986, "masio@gmail.com", contact2);
addressBook.addContact(contact1);
addressBook.addContact(contact2);

addressBook.contacts;