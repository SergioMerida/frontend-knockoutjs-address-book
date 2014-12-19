/*Array with the first data in the html*/
var initialData = [ 	
{ firstName: "Sergio", lastName: "Merida", phones: [ 	
{ type: "Mobile", number: "5050-2121" }] 	
}, 	
{ firstName: "Ramiro", lastName: "Tabarini", phones: [ 	
{ type: "Mobile", number: "4444-2222" }] 	
} 	
]; 	

/*Contacts Model where the data goes*/ 	
var ContactsModel = function(contacts) { 	
 var self = this; 	
 self.contacts = ko.observableArray(ko.utils.arrayMap(contacts, function(contact) { 	
 return { firstName: contact.firstName, lastName: contact.lastName, phones: ko.observableArray(contact.phones) }; 	
 })); 	
 	
 self.addContact = function() { 	
 self.contacts.push({ 	
 firstName: "", 	
 lastName: "", 	
 phones: ko.observableArray() 	
 }); 	
 }; 	
 	
 self.removeContact = function(contact) { 	
 self.contacts.remove(contact); 	
 }; 	
 	
 self.addPhone = function(contact) { 	
 contact.phones.push({ 	
 type: "", 	
 number: "" 	
 }); 	
 }; 	
 	
 self.removePhone = function(phone) { 	
 $.each(self.contacts(), function() { this.phones.remove(phone) }) 	
 }; 	
 	
 self.save = function() { 	
 self.lastSavedJson(JSON.stringify(ko.toJS(self.contacts), null, 2)); 	
 }; 	
 	
 self.lastSavedJson = ko.observable("") 	
}; 	
 	
ko.applyBindings(new ContactsModel(initialData));
/*apply contacts model with the initial data*/

