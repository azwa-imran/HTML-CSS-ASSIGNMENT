document.write("<p>This line was added using document.write()</p>");
// The strikethrough is just VS Code marking it as a outdated method 
//  it still works fine it's just not recommended for modern web development
//   because of the page-clearing issue...
const heading = document.getElementById("title");
const message = document.getElementById("message");
const button = document.getElementById("showBtn");
button.addEventListener("click", function() {
  alert(heading.textContent);       
  console.log(message.textContent); 
});