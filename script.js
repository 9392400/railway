function reserveclick(){
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var source=document.getElementById("source").value;
    var destination=document.getElementById("destination").value;
    var date=document.getElementById("timedate").value;
    var slepper=document.getElementById("class").value;
    if(!name || !age || !source || !destination || !date || !slepper){
        alert("please fill all fields");
        return;
}
    document.getElementById("ticket-name").innerText=name;
    document.getElementById("ticket-age").innerText=age;
    document.getElementById("ticket-source").innerText=source;
    document.getElementById("ticket-destination").innerText=destination;
    document.getElementById("ticket-date").innerText=date;
    document.getElementById("ticket-class").innerText=slepper;
    document.getElementById("form-box").style.display="none";
    document.getElementById("result-box").style.display="block";
    var emailParams={
    to_email:"guttagopi03@gmail.com",
    to_name:name,
    name:name,
    age:age,
    source:source,
    destination:destination,
    date:date,
    class:slepper
    };
    emailjs.send("service_z3ve1vc","template_0hmfwjl",emailParams)
    .then(function(){
     alert("Ticket confirmation sent to Your email")
    })
   .catch(function(error){
    alert("Failed to send email:");
    });
}
function bookticket(){
    document.getElementById("form-box").style.display="block";
    document.getElementById("result-box").style.display="none";
    document.querySelectorAll("input","select").forEach(function(x){
    x.value="";
});
}