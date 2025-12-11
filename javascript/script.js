//Arrays
let extras = document.querySelectorAll(".extra");
let summaryBox = document.getElementById("orderSummary");

function calculateExtras(extraElements) {
  //Variables/Let
  let total = 0;
  // Loop through each checkbox and add its value if selected
  extraElements.forEach((item) => {
    if (item.checked) {
      //Arithmentic operators
      total += Number(item.value);
    }
  });

  return total;
}
//Event Listener used for functions and retrive the id for submit
document.getElementById("shirtForm").addEventListener("submit", function (e) {
  e.preventDefault();

  try {
    //Used for oreder form section to get users first,last name, and email.
    let first = document.getElementById("firstName").value;
    let last = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let quantity = Number(document.getElementById("quantity").value);

    //if statement if all fields were not inputted correctly  or nothing is inputted at all.
    if (first === "" || last === "" || email === "" || quantity < 1) {
      alert("Please fill out all fields correctly.");
      return;
    }

    let size = document.querySelector("input[name='size']:checked");
    //Alerts if user did not input a selected shirt size
    if (!size) {
      alert("Please select a shirt size.");
      return;
    }
    //does calculations for my total
    let basePrice = +size.value;
    let extraCost = calculateExtras(extras);
    let total = (basePrice + extraCost) * quantity;

    let sizeName = "";
    //switches allow choices from radio buttons from each price
    switch (basePrice) {
      case 15:
        sizeName = "Small";
        break;
      case 18:
        sizeName = "Medium";
        break;
      case 20:
        sizeName = "Large";
        break;
    }
    //Displays my order and sets content summary
    summaryBox.style.display = "block";
    summaryBox.innerHTML =
      "<h2>Order Summary</h2>" +
      "<p>Name: " +
      first +
      " " +
      last +
      "</p>" +
      "<p>Email: " +
      email +
      "</p>" +
      "<p>Shirt color: " +
      color.value +
      "</p>" +
      "<p>Shirt Size: " +
      sizeName +
      "</p>" +
      "<p>Extras Cost: $" +
      extraCost +
      "</p>" +
      "<p>Quantity: " +
      quantity +
      "</p>" +
      "<h3>Total Price: $" +
      total +
      "</h3>";
    //catches incase a error occurs in my JS code
  } catch (error) {
    alert("Something went wrong. Please try again.");
    console.log(error);
  }
});
