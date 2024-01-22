// //SET
// //it will take the input when it is in array of object
// var studentDetails=new Set()
// studentDetails.add("pranee")//adding elements 
// studentDetails.add(20)
// studentDetails.add("ECE")
// studentDetails.add("ECE")//don't take duplicates

// console.log(studentDetails)

// var studentDetails1=new Set("aiadmk","dmk","bjp")//it will take first element
// console.log(studentDetails1)

// var studentDetails2=new Set(["aiadmk","dmk","bjp"])
// console.log(studentDetails2)
// for (const value of studentDetails2) {
    
//     console.log(value)
// }



//map is key , value pair:-

//  MapEx=new Map([
//     ["id","value"],
//     ["id2","value2"]
//  ])
//  console.log(MapEx)

//  for (const value of MapEx) {
//     console.log(value)
    
//  }
// //not come:-
// //  for (const key in MapEx) {
// //     console.log(key)
    
// //  }

// console.log(MapEx.has("name1"))
// console.log(MapEx.has("id"))

// MapEx.set("Name","praneetha")
// console.log(MapEx)

// MapEx.delete("id2","value2")
// console.log(MapEx)
   

//functions
//eg1
function fun(){
   console.log("Function Sample Example")
}
fun()

function fun(a,b){
   console.log("Function With Argument and without return type")
   for(i=a;i<b;i++){
       if(i%2==0){
           console.log("Even Number",i)
       }
       else{
           console.log("Odd Number",i)
       }
   }
}
fun(5,10)

//function without argument:-

function fun()
{
   var a=10
   return a

}

console.log(fun())