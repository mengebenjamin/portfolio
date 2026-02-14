(function(){
    emailjs.init("YOUR_PUBLIC_KEY");
})();

const form = document.getElementById("form");
const send = document.getElementById("submit");


emailjs.sendform(
    "YOUR_SERVICES_ID",
    "YOUR_TEMPLATE_ID",
    this
)

.then(function(){
    alert("message send successful")
}), function (error){
    try{
        alert("error")
    }catch(error){
        alert("can not send message")
    }
}