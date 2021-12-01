function validateForm() {
  var form_items = document.getElementsByTagName("form");
  var name = form_items[0][0].value;
  var email = form_items[0][1].value;
  var message = form_items[0][2].value;
  if (name === "") {
    alert("Name has to be filled out");
    return false;
  }
  if (email === "") {
    alert("Eamil has to be filled out");
    return false;
  }
  if (message === "") {
    alert("Message has to be filled out");
    return false;
  }
  return validateEmail();
}

function validateEmail() {
  var email_val = document.contact_form.email.value;
  var atpos = email_val.indexOf("@");
  var dotpos = email_val.lastIndexOf(".");

  if (atpos < 1 || dotpos - atpos < 2) {
    alert("Please enter correct email address");
    document.contact_form.email.focus();
    return false;
  }
  return true;
}

function filter(id, cname, pname) {
  // Declare variables
  var input, filter, mcard, mname, name, i, txtValue;
  input = document.getElementById(id);
  filter = input.value.toUpperCase();
  mcard = document.getElementsByClassName(cname);
  mname = document.getElementsByClassName(pname);

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < mname.length; i++) {
    name = mname[i];
    txtValue = name.textContent || name.innerText;
    // if found matching letter
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      mcard[i].style.display = "";
    } else {
      // no display if can't find
      mcard[i].style.display = "none";
    }
  }
}
