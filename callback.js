//Callback
function ramusomu(WelcomeMessage,callback){
    setTimeout(function()
    {
        console.log(WelcomeMessage)
        callback();
    },2000)

}

function miniAni(){
    console.log("Thambi Oodidu")
}
ramusomu("Hello ramu and somu\nwelcome to kongu college",miniAni)