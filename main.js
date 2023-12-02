function enter()
{
    var user=document.getElementById("Username").value;
    var pass=document.getElementById("Pass").value;
    if(user=="Sukhmanjeet Singh" && pass=="!@#$%^&*()")
    {
        window.open("time_pass.html", "_self");
    }
    else
    {
        document.getElementById("h5").innerHTML="Oops! Aren't you doing anything with my privacy?";
        console.log("Usename: Sukhmanjeet Singh");
        console.log("Password: !@#$%^&*()");
    }
}