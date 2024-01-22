//FOR loops 
// sum = 0
// for (var i=0;i<10;i++)
// {
//     sum = sum+i;
// }
// console.log("The sum in for loop is : ",sum)

// //WHILE loops
// sumw=0
// var i =0
// while(i<10)
// {
//     sumw+=i;
//     i++;
// }
// console.log("The sum in while loop is : ",sumw)

// //DO-WHILE loops
//  i=0
// sumd=0
// do{
//     sumd+=i
//     i++
// }while(i<10)
// console.log("The sum in do-while loop is : ",sumd)

// //example 1
// arr=[10,20,30]
// console.log(arr.length)
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// //example 2
// arr=[10,20,30,10.5]
// console.log(arr.length)
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }

// //example 3
// arr=[10,20,30,"kongu",true,false]
// console.log(arr.length)
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// var arr=[10,20,30]
// for (const index in arr) {
//     console.log(" the value present in:",index,"is",arr[index])
// }

// To access the elements directly:-(forof ,foreach)
//forof

// arr=[10,20,30]
// for (const element of arr) {
//     console.log(element)//element of value  
// }

// //foreach
// arr=[10,20,30]
// arr.forEach(element => {
//     console.log(element)
// });

//for in
var kongu = new Object()
kongu["Fees"]= "1L"
kongu["Accomodation"] = "Good"
kongu["No.of hostels"] = "10"
kongu["Food "] = "Pretty Decent"
console.log("The Kongu Specialities are : ",kongu)
for (const key in kongu) {
    console.log(key,kongu[key])
    

}


