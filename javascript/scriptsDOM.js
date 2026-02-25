//assigns intro variable for text content for my inspirational quote
let intro = document.querySelector(".intro");
intro.textContent =
  "“Believe in the strength you haven’t discovered yet. Trust the path even when you can’t see the next step. Carry hope like a lantern through your darkest moments. And remember that every sunrise finds those who keep moving.”";
//Here my querySelectorAll() looks through my HTML document and finds every element that matches the CSS selector I provide and store it in a variable
let titles = document.querySelectorAll(".content-title");
titles[0].textContent = "Curious cats: Cats love to discover.";
titles[1].textContent = "How cats play: Cats love to chase and love fast jerking movements!";
titles[2].textContent = "What cats eat: Cats love to eat, but becareful what you feed them and what food you leave out!";

// Grabs element by ID and assigns it to variable than sets text content
let ftext = document.getElementById("firstText");
ftext.textContent = "How curious cats love to explore.";
let stext = document.getElementById("secondText");
stext.textContent = "Cats love to hunt watch out they might scratch you as they play rough.";
let ttext = document.getElementById("thirdText");
ttext.textContent ="Your cat will mostly let you know when hes hungry make sure to feed them its the most important thing of a cats day is nutrition!";

//Grabs element by ID and uses it to asign image content
let firstImage = document.getElementById("firstImage");
firstImage.src = "./images/cat1.png";
let secondImage = document.getElementById("secondImage");
secondImage.src = "./images/cat2.png";
let thirdImage = document.getElementById("thirdImage");
thirdImage.src = "./images/cat3.png";

//My button array for each color changing ID
buttons = [
    document.getElementById("ColorChanging"),
    document.getElementById("ColorChanged"),
    document.getElementById("ColorChange"),
];
//Function provides use for changing background color of the heading when button is clicked
function buttonClicked(ncolor) {
    document.querySelector(".headings").style.backgroundColor = ncolor;
}
//When a certain button is clicked that corelates with each button it calls the button clicked function.
buttons[0].addEventListener("click", function () {
    buttonClicked("sienna");
});

buttons[1].addEventListener("click", function () {
    buttonClicked("slategray");
});

buttons[2].addEventListener("click", function () {
    buttonClicked("darkorange");
});

