
const button = document.getElementById("hoverButton");
const messageParagraph = document.getElementById("message");

button.addEventListener("mouseover", function() {
    messageParagraph.textContent = "Mouse is over the button!";
});


button.addEventListener("mouseout", function() {
    messageParagraph.textContent = "";
});
