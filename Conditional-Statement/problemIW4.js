let stored_username = "tusarmondal@gmail.com";
let stored_password = "abcd1234";

let username = "tusarmondal@gmail.com";
let password = "abcd1234";

if(username==stored_username)
{
  if(password==stored_password)
  {
    console.log("Successfully logged in");
  }
  else{
    console.log("Wrong Password");
  }
}
else
{
  console.log("Wrong Credential");
}