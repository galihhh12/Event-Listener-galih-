
const inputField = document.getElementById("textInput");
const displayParagraph = document.getElementById("displayKey");

inputField.addEventListener("keydown", function(event) {
    displayParagraph.textContent = `You pressed: ${event.key}`;
});
