validateInput =function(password, verifier) 
{
    var password = document.getElementById('password').value
    var verifier = document.getElementById('verifier').value

    console.log(password);
    console.log(verifier);
    
    password=password.toString()
    verifier=verifier.toString()

    


    if(password!=verifier)
    {
        alert("passwords must match!")
    }
    else if(password.toString().length <8)
    {
        alert("Password must be at least 8 characters long!")
    }

}