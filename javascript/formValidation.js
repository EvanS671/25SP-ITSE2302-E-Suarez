document
  .getElementById("myform")
  .addEventListener("submit", handleCatAdoptionSubmission);

function handleCatAdoptionSubmission(event) {
  //Prevents page from being refreshed when submitted.
  event.preventDefault();

  //Validates user did required fields.
  if (validateRequiredFields()) {
    const totalPrice = calculateAdoptionTotal();
    displayFormData(totalPrice);
  } else {
    return;
  }
}

// Function 2: Validates
function validateRequiredFields() {
  const username = document.getElementById("username");
  const email = document.getElementById("email");

  // Doesn't allow user to submit their name(also alerts user if they don't have an input) if they don't put anything.
  if (username.value.trim() === "") {
    alert("Please enter your full name.");
    username.focus();
    return false;
  }

  // (Also alerts user if they don't have an input) Doesn't allow user to submit their email address if they don't put anything.
  if (email.value.trim() === "") {
    alert("Please enter your email address.");
    email.focus();
    return false;
  }

  return true;
}

// Function 3: Calculates total adoption cost
function calculateAdoptionTotal() {
  const catCheckboxes = document.getElementsByName("cat");
  let total = 0;

  // Calculates from the checkboxes || Converts parseFloat.
  for (let i = 0; i < catCheckboxes.length; i++) {
    if (catCheckboxes[i].checked) {
      total += parseFloat(catCheckboxes[i].value);
    }
  }

  // Creates a drop down for your SelectedShipping options.
  const shippingSelect = document.getElementById("myDropdown");
  const selectedShipping =
    shippingSelect.options[shippingSelect.selectedIndex].value;

  if (selectedShipping === "Fast") {
    total += 5;
  } else if (selectedShipping === "Same") {
    total += 15;
  }

  return total;
}

function displayFormData(totalPrice) {
  const customerName = document.getElementById("username").value;
  const emailAddress = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone").value;

  // Finds values for each contactSourceRadios which helps with recipt on how they heard about us.
  const contactSourceRadios = document.getElementsByName("source");
  let contactSource = "";
  for (let i = 0; i < contactSourceRadios.length; i++) {
    if (contactSourceRadios[i].checked) {
      contactSource = contactSourceRadios[i].value;
      break;
    }
  }

  // Finds user checked off cats.
  const catCheckboxes = document.getElementsByName("cat");
  let selectedCats = [];
  for (let i = 0; i < catCheckboxes.length; i++) {
    if (catCheckboxes[i].checked) {
      selectedCats.push(catCheckboxes[i].id);
    }
  }

  // Gets value and text inputted from both myDropdown and st message.
  const shippingType = document.getElementById("myDropdown").value;
  const customerMessage = document.getElementById("message").value;

  // Recipt for users Submission.
  console.log("Cat Adoption Form Submission:");
  console.log("Customer Name: " + customerName);
  console.log("Email Address: " + emailAddress);
  console.log("Phone Number: " + phoneNumber);
  console.log("How did you hear about us: " + contactSource);
  console.log("Selected Cat Breeds: " + selectedCats.join(", "));
  console.log("Shipping Type: " + shippingType);
  console.log("Customer Message: " + customerMessage);
  console.log("Total Adoption Price: $" + totalPrice.toFixed(2));

  console.log("You have submitted your order.");
}
