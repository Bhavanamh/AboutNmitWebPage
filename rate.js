function validateForm() {
  const name = document.querySelector("input[name='name']").value;
  const address = document.querySelector("input[name='address']").value;
  const email= document.querySelector("input[name='email']").value;
 const phone= document.querySelector("input[name='phone']").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
 const dob= document.querySelector("input[name='dob']").value;
const department = document.querySelector("input[name='department']:checked").value;
 const comments = document.querySelector("textarea[name='user_msg']").value;

  if (name === "") {
    alert("Please enter your name.");
    return false;
  }
if (address === "") {
    alert("Please enter your address.");
    return false;
  }

  if (email === "") {
    alert("Please enter your email address.");
    return false;
  }

  if (phone === "") {
    alert("Please enter your phonenumber.");
    return false;
  }

  if (gender === "") {
    alert("Please select your gender.");
    return false;
  }

if (dob === "") {
    alert("Please enter your dob.");
    return false;
  }
if (department=== "") {
    alert("Please select your department.");
    return false;
  }

if (comments === "") {
    alert("Please enter your comments.");
    return false;
  }

  return true;
}

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }


});
