function validate()
{
var user=document.getElementById("username").value;
var pass=document.getElementById("password").value;
if(user=="" || pass=="")
{
alert("Please enter the username and password");
}
else
{
window.location = "ListProduct.html"; 

}

return false;
}
function logout()
{
var a=confirm("Are you sure you want to logout of your account");
if(a==true)
{
window.location="Login.html";                    
}
else
{
}
}
