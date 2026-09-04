document.write("<p>This line was added using document.write()</p>");
const heading = document.getElementById("title");
const message = document.getElementById("message");
const button = document.getElementById("showBtn");
button.addEventListener("click", function() {
  alert(heading.textContent);       
  console.log(message.textContent); 
});