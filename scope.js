// Scope
// Global scope
/*var sum = 0
for (var i = 0;i < 10; i++)
{
    sum += i
}
console.log(sum)

i = 0
while(i<10)
{
    sum += i
    i++
}
console.log(sum)

i=0
// do while
do{
    sum += i
    i++
}while(i<10)
console.log(sum)

// Local scope
for(let i = 0;i < 5;i++){
    console.log(i)
}*/

//block scope
// var a=10
// console.log(a)
// {
//     let a=5
//     let b=10
//     console.log(a)
//     console.log(b)


// }
// console.log(a)


//var
var a=10
console.log(a)
{
    a=5
    let b=10
    console.log(a)
    console.log(b)//let end within the block


}
console.log(a)