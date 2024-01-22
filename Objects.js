var customerdetails={
    "name":"Aswin",
    "Age":20,
    "Phone":"9345422833",

}
console.log(customerdetails)
customerdetails["department"] = "CSE";
console.log(customerdetails)

//way 2
var studentDetails = {}
studentDetails["RollNo"] = "21ECR166"
studentDetails["Name"] = "Swe"
studentDetails["Age"] = "21"
studentDetails["Phone"] = "9344509722"

console.log(studentDetails)

//way 3
var kongu = new Object()
kongu["Fees"]= "1L"
kongu["Accomodation"] = "Good"
kongu["No.of hostels"] = "10"
kongu["Food "] = "Pretty Decent"
console.log("The Kongu Specialities are : ",kongu)
