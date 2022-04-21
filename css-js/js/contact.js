function sendemail(){
    Email.send({
Host : "smtp.gmail.com",
Username : "desirestore.help@gmail.com",
Password : "Admin111999",
To : 'solankiayush900@gmail.com',
From : document.getElementById("email").value,
Subject :"New Contact form Enquiry",
Body : "Name : "+ document.getElementById("name").value
+ "<br> Email : "+ document.getElementById("email").value
+ "<br> Phone No : " + document.getElementById("phone").value
+ "<br> massage : " + document.getElementById("massage").value
}).then(
message => alert("Massage Sent Succesfully")
);

}